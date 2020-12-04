import clsx from "clsx";
import { convertFromHTML, convertToHTML } from "draft-convert";
import {
  AtomicBlockUtils,
  CompositeDecorator,
  Editor as DraftJsEditor,
  EditorState,
  getDefaultKeyBinding,
  Modifier,
  RichUtils,
  SelectionState
} from "draft-js";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import EditorBlockStyleControls from "./EditorBlockStyleControls";
import EditorInlineStyleControls from "./EditorInlineStyleControls";
import EditorImage from "./EditorImage";

// draft-convert configuration for converting HTML to EditorState.
export const fromHtmlConfig = {
  htmlToEntity: (nodeName, node, createEntity) => {
    switch (nodeName) {
      case "a":
        return createEntity("LINK", "MUTABLE", { url: node.href });
      case "img":
        return createEntity("IMAGE", "IMMUTABLE", {
          alt: node.alt,
          src: node.src
        });
      default:
        return null;
    }
  },
  htmlToBlock: nodeName => {
    switch (nodeName) {
      case "div":
        return {
          type: "atomic",
          data: {}
        };
      default:
        return null;
    }
  }
};

// draft-convert configuration for converting EditorState to HTML.
const toHtmlConfig = {
  blockToHTML: block => {
    switch (block.type) {
      case "code-block":
        return <pre />;
      case "atomic":
        return <div />;
      default:
        return null;
    }
  },
  entityToHTML: (entity, originalText) => {
    switch (entity.type) {
      case "LINK":
        return <a href={entity.data.url}>{originalText}</a>;

      case "IMAGE":
        return <img alt={entity.data.alt} src={entity.data.src} />;
      default:
        return originalText;
    }
  }
};

// draft-js map of inline style types to the corresponding style displayed in the editor.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    padding: 2
  }
};

const getBlockComponent = block => {
  switch (block.getType()) {
    case "atomic":
      return { component: EditorImage, editable: false };
    default:
      return null;
  }
};

class Editor extends React.Component {
  static displayName = "Editor";

  static propTypes = {
    /**
     * Whether or not to move focus the Editor on first render.
     */
    autoFocus: PropTypes.bool,

    /**
     * action controls to display on the right side of the editor control bar.
     */
    actionControls: PropTypes.arrayOf(PropTypes.node),

    /**
     * Additional action controls to display on the left side of the editor control bar.
     */
    stylingControls: PropTypes.arrayOf(PropTypes.node),

    /**
     * The id of the element to use as the aria-label for the Editor.
     */
    ariaLabelledBy: PropTypes.string,

    /**
     * Optional array of whitelisted styles
     * ex. ['code-block', 'BOLD', 'LINK']
     */
    controlWhitelist: PropTypes.arrayOf(PropTypes.string),

    /**
     * Position of controls for the editor
     */
    controlPosition: PropTypes.oneOf(["top", "bottom"]),

    /**
     * The decorator for the editor.
     */
    decorator: PropTypes.shape({ type: PropTypes.oneOf([CompositeDecorator]) }),

    /**
     * If the error style should be shown or not
     */
    error: PropTypes.any,

    /**
     * Initial content to set in the editor
     */
    initialValue: PropTypes.any,

    /**
     * Function to execute when editor content changes, gets html value of editor
     */
    onChange: PropTypes.func,

    /**
     * Optional placeholder. Shows when there is no text.
     */
    placeholder: PropTypes.node,

    /**
     * Optional style applied to parent div of editor.
     * Used to set a minimum height.
     */
    style: PropTypes.object
  };

  static defaultProps = {
    autoFocus: true,
    stylingControls: [],
    actionControls: [],
    controlPosition: "top"
  };

  constructor(props) {
    super(props);

    this.editor = React.createRef();

    this.state = { editorState: undefined };
  }

  componentDidMount() {
    const { decorator, initialValue } = this.props;

    // Sets editor state after mount (because SSR)
    const editorState = initialValue
      ? EditorState.createWithContent(
          convertFromHTML(fromHtmlConfig)(initialValue || ""),
          decorator
        )
      : EditorState.createEmpty(decorator);
    this.onChange(editorState, false);
  }

  onChange = (editorState, propagate = true) => {
    this.setState({ editorState }, () => {
      const html = this.getHtml();

      if (this.props.onChange && propagate) {
        this.props.onChange(html);
      }
    });
  };

  getLinkedStyles = () => {
    const theme = this.context;
    const { controlPosition } = this.props;

    return css.resolve`
      .wrapper {
        background-color: ${theme.palette.common.white};
        border: 1px solid #979797;
        border-radius: ${theme.shape.borderRadius.md};
        font-family: ${theme.typography.body1.fontFamily};
        font-size: ${theme.typography.body1.fontSize};
        line-height: ${theme.typography.body1.lineHeight};
        min-height: 115px;
        position: relative;
        transition: ${theme.transitions.duration.standard}ms all;
        width: 100%;
        word-break: break-word;
      }

      .wrapper.focus {
        border-color: ${theme.palette.tertiary.main};
        outline: 0;
      }

      .wrapper.error {
        border-color: ${theme.palette.negative.main};
      }

      .editor.top {
        border-bottom-left-radius: ${theme.shape.borderRadius.md};
        border-bottom-right-radius: ${theme.shape.borderRadius.md};
        border-top: ${controlPosition === "bottom"
          ? `1px solid ${theme.palette.grey[400]}`
          : "none"};
      }

      .editor.bottom {
        border-bottom: ${controlPosition === "top"
          ? `1px solid ${theme.palette.grey[400]}`
          : "none"};
        border-top-left-radius: ${theme.shape.borderRadius.md};
        border-top-right-radius: ${theme.shape.borderRadius.md};
      }

      .editor {
        background-color: ${theme.palette.common.white};
        color: ${theme.palette.grey[600]};
        cursor: text;
        font-size: ${theme.typography.body1.fontSize};

        /* 80px - 2 * 1px borders  */
        min-height: 78px;
        overflow: auto;
        padding: ${theme.spacing(3)}px;
        transition: ${theme.transitions.duration.standard}ms all;
      }

      .focus .editor {
        background-color: ${theme.palette.common.white};
        color: ${theme.palette.text.primary};
      }

      .controlContainer {
        background-color: ${theme.palette.grey[100]};
        display: flex;
        flex: 1 1 auto;
        flex-direction: row;
        justify-content: space-between;
        padding-left: ${theme.spacing(2)}px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      .stylingControls > div:not(:last-child) {
        border-right: 1px solid ${theme.palette.divider};
      }

      @media (max-width: ${theme.breakpoints.sm}px) {
        .controlContainer {
          display: none;
        }

        .wrapper {
          min-height: 0;
        }

        .editor.bottom,
        .editor.top {
          border-bottom: 0;
          border-radius: ${theme.shape.borderRadius.md};
        }
      }

      .controlRow {
        display: inline-block;
        margin: ${theme.spacing(1)}px 0;
        user-select: none;
      }

      .blockquote {
        border-left: 5px solid ${theme.palette.grey[400]};
        color: ${theme.palette.text.secondary};
        font-style: italic;
        margin: 16px 0;
        padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
      }

      /* Rich Text Editor */
      :global(.DraftEditor-root) {
        position: relative;
      }

      :global(.public-DraftEditorPlaceholder-inner) {
        color: ${theme.palette.text.disabled};
      }

      :global(.public-DraftEditorPlaceholder-root) {
        position: absolute;
      }

      :global(.richTextEditor-hidePlaceholder
          .public-DraftEditorPlaceholder-root) {
        display: none;
      }

      :global(.public-DraftEditorPlaceholder-hasFocus) {
        display: none;
      }

      :global(.public-DraftStyleDefault-pre) {
        background-color: rgba(0, 0, 0, 0.05);
        font-family: "Inconsolata", "Menlo", "Consolas", monospace;
        font-size: 16px;
        padding: ${theme.spacing(4)}px;
      }

      :global(.public-DraftStyleDefault-block) {
        margin-bottom: 1em;
      }
    `;
  };

  /*
   * External method for setting content rather than relying on props update.
   * Note: Does not keep editing history so use  sparingly.
   */
  setHtml = async html => {
    const { decorator, autoFocus } = this.props;

    const contentState = convertFromHTML(fromHtmlConfig)(html || "");
    const editorState = EditorState.createWithContent(contentState, decorator);

    await this.onChange(editorState);

    if (autoFocus) {
      this.focus();
    }
  };

  getHtml = () => {
    const html = convertToHTML(toHtmlConfig)(
      this.state.editorState.getCurrentContent()
    );
    return this.hasContent() ? html : "";
  };

  // draft-js utility for styling blocks with css.
  getBlockStyle = block => {
    const linkedStyles = this.getLinkedStyles();

    switch (block.getType()) {
      case "blockquote":
        return clsx(linkedStyles.className, "blockquote");
      default:
        return null;
    }
  };

  hasContent = () => this.state.editorState.getCurrentContent().hasText();

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  /* Bandaid solution for focus loss on enter :
  only occurs when coming from certain routes. */
  myKeyBindingFn = e => {
    if (e.key === "Enter") e.stopPropagation();
    return getDefaultKeyBinding(e);
  };

  focus = forceFocus => {
    const { autoFocus } = this.props;
    if ((this.editor && this.editor.current && autoFocus) || forceFocus) {
      this.editor.current.focus();
    }
  };

  // Control button callback for toggling block type
  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  // Control button callback for toggling inline styles
  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  addText = text => {
    const { editorState } = this.state;

    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    let newContentState;

    // Checks if text is highlighted to either insert/replace
    if (selectionState.isCollapsed()) {
      newContentState = Modifier.insertText(contentState, selectionState, text);
    } else {
      newContentState = Modifier.replaceText(
        contentState,
        selectionState,
        text
      );
    }

    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "insert-characters"
    );

    this.onChange(newEditorState);
  };

  // Control button callback for adding a link
  addLink = ({ text, url }) => {
    const { editorState } = this.state;

    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    // replace the current selection with the provided text
    const newContentState = Modifier.replaceText(
      contentState,
      selectionState,
      text
    );
    const contentStateWithEntity = newContentState.createEntity(
      "LINK",
      "MUTABLE",
      { url }
    );

    // Get the first block key in the selection and force selection of inserted text
    const blockKey = selectionState.getIsBackward()
      ? selectionState.getFocusKey()
      : selectionState.getAnchorKey();
    const anchorOffset = selectionState.getStartOffset();
    const focusOffset = anchorOffset + text.length;

    const newSelectionState = new SelectionState({
      anchorKey: blockKey,
      anchorOffset,
      focusKey: blockKey,
      focusOffset
    });
    const editorStateWithSelection = EditorState.forceSelection(
      editorState,
      newSelectionState
    );

    // Add the newly created link
    const editorStateWithEntity = EditorState.set(editorStateWithSelection, {
      currentContent: contentStateWithEntity
    });

    // Make the new link entity active.
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const editorStateWithLink = RichUtils.toggleLink(
      editorStateWithEntity,
      editorStateWithEntity.getSelection(),
      entityKey
    );

    this.onChange(editorStateWithLink);
  };

  /**
   * @typedef {Object} Block - object containing range which to remove links from
   * @property {number} start - start position of selection range
   * @property {number} end - end position of selection range
   */

  /**
   * Control button callback for toggling removing links.
   * This breakdown of selection states is necessary because we don't want to clear the whole user's
   * selection of all entities, only links.
   *
   * @param {Object.<string, Array.<Block>} ranges - Block keys to ranges, use the entityRanges object returned from getEntitesSelection.
   */
  removeLinks = ranges => {
    const blocks = Object.keys(ranges);

    let newEditorState = this.state.editorState;

    blocks.forEach(key => {
      const block = ranges[key];

      block.forEach(({ start, end }) => {
        const selectionState = new SelectionState({
          anchorKey: key,
          anchorOffset: start,
          focusKey: key,
          focusOffset: end
        });

        const contentState = newEditorState.getCurrentContent();

        const newContentState = Modifier.applyEntity(
          contentState,
          selectionState,
          null
        );

        newEditorState = EditorState.set(newEditorState, {
          currentContent: newContentState
        });
      });
    });

    this.onChange(newEditorState);
  };

  addImage = ({ url, altText }) => {
    const { editorState } = this.state;

    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      {
        alt: altText,
        src: url
      }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const editorStateWithEntity = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });

    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorStateWithEntity,
      entityKey,
      " "
    );

    this.onChange(newEditorState);
  };

  static contextType = ThemeContext;

  renderControls = () => {
    const { stylingControls, actionControls } = this.props;
    const { editorState } = this.state;

    const linkedStyles = this.getLinkedStyles();

    return (
      <React.Fragment>
        <div className={clsx(linkedStyles.className, "controlContainer")}>
          <div className={clsx(linkedStyles.className, "stylingControls")}>
            <EditorBlockStyleControls
              classes={[linkedStyles.className, "controlRow"]}
              editorState={editorState}
              toggle={this.toggleBlockType}
              whitelist={this.props.controlWhitelist}
            />
            <EditorInlineStyleControls
              classes={[linkedStyles.className, "controlRow"]}
              editorState={editorState}
              toggle={this.toggleInlineStyle}
              whitelist={this.props.controlWhitelist}
            />
            {stylingControls &&
              stylingControls.map((control, index) => (
                <div
                  key={`control-${index}`}
                  className={clsx([linkedStyles.className, "controlRow"])}
                >
                  {control}
                </div>
              ))}
          </div>
          <div>
            {actionControls &&
              actionControls.map((control, index) => (
                <div key={`control-${index}`}>{control}</div>
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const {
      ariaLabelledBy,
      error,
      controlPosition,
      placeholder,
      style
    } = this.props;

    const { editorState } = this.state;

    if (!editorState) return null;

    const linkedStyles = this.getLinkedStyles();

    const wrapperClasses = clsx(
      linkedStyles.className,
      "wrapper",
      editorState.getSelection().getHasFocus() && "focus",
      error && "error"
    );

    const content = editorState.getCurrentContent();
    const hidePlaceholder =
      !content.hasText() &&
      content
        .getBlockMap()
        .first()
        .getType() !== "unstyled";

    const editorClasses = clsx(
      linkedStyles.className,
      "editor",
      controlPosition,
      hidePlaceholder && "richTextEditor-hidePlaceholder"
    );

    return (
      <React.Fragment>
        <div className={wrapperClasses} onClick={() => this.focus(true)}>
          {controlPosition === "top" && this.renderControls()}
          <div className={editorClasses} style={style}>
            <DraftJsEditor
              ariaLabelledBy={ariaLabelledBy}
              blockRendererFn={getBlockComponent}
              blockStyleFn={this.getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.myKeyBindingFn}
              onChange={this.onChange}
              placeholder={placeholder}
              ref={this.editor}
              spellCheck
            />
          </div>
          {controlPosition === "bottom" && this.renderControls()}
        </div>
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default Editor;

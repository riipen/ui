import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faListOl from "@fortawesome/free-solid-svg-icons/faListOl";
import faListUl from "@fortawesome/free-solid-svg-icons/faListUl";
import faQuoteLeft from "@fortawesome/free-solid-svg-icons/faQuoteLeft";

import EditorControlButton from "./EditorControlButton";

const BLOCK_TYPES = [
  {
    label: <FontAwesomeIcon icon={faListUl} />,
    style: "unordered-list-item",
    size: "small"
  },
  {
    label: <FontAwesomeIcon icon={faListOl} />,
    style: "ordered-list-item",
    size: "small"
  },
  { label: "H1", style: "header-one", width: "small" },
  { label: "H2", style: "header-two", width: "small" },
  { label: "H3", style: "header-three", width: "small" },
  { label: "H4", style: "header-four", width: "small" },
  {
    label: <FontAwesomeIcon icon={faQuoteLeft} />,
    style: "blockquote",
    size: "small"
  }
];

class EditorBlockStyleControls extends React.Component {
  static displayName = "EditorBlockStyleControls";

  static propTypes = {
    /**
     * The additional css classes to style the controls with.
     *
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The draftjs editor state immutable record.
     *
     */
    editorState: PropTypes.any.isRequired,

    /**
     * Function to toggle block type.
     *
     */
    toggle: PropTypes.func.isRequired,

    /**
     * Optional array of whitelisted block styles
     * ex. ['header-one', 'code-block']
     *
     */
    whitelist: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    classes: []
  };

  onControlClick = style => () => this.props.toggle(style);

  render() {
    const { classes, editorState, whitelist } = this.props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    let controlButtons = BLOCK_TYPES;
    if (whitelist) {
      controlButtons = BLOCK_TYPES.filter(({ style }) =>
        whitelist.includes(style)
      );
    }

    if (controlButtons.length === 0) {
      return null;
    }

    return (
      <div className={clsx(classes)}>
        {controlButtons.map(({ label, style, size }) => (
          <EditorControlButton
            key={style}
            active={style === blockType}
            label={label}
            onClick={this.onControlClick(style)}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default EditorBlockStyleControls;

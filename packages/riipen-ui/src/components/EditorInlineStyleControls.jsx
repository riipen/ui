import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline
} from "@fortawesome/free-solid-svg-icons";

import EditorControlButton from "./EditorControlButton";

const INLINE_STYLES = [
  {
    label: <FontAwesomeIcon icon={faBold} />,
    style: "BOLD",
    size: "small"
  },
  {
    label: <FontAwesomeIcon icon={faItalic} />,
    style: "ITALIC",
    size: "small"
  },
  {
    label: <FontAwesomeIcon icon={faUnderline} />,
    style: "UNDERLINE",
    size: "small"
  }
];

class EditorInlineStyleControls extends React.Component {
  static displayName = "EditorInlineStyleControls";

  static propTypes = {
    /**
     * The additional css classes to style the controls with.
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The draftjs editor state immutable record.
     */
    editorState: PropTypes.any.isRequired,

    /**
     * Function to toggle inline style.
     */
    toggle: PropTypes.func.isRequired,

    /**
     * Optional array of whitelisted inline styles
     * ex. ['ITALIC', 'BOLD']
     */
    whitelist: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    classes: []
  };

  onControlClick = style => () => this.props.toggle(style);

  render() {
    const { classes, editorState, whitelist } = this.props;
    const currentStyle = editorState.getCurrentInlineStyle();

    let controlButtons = INLINE_STYLES;
    if (whitelist) {
      controlButtons = INLINE_STYLES.filter(({ style }) =>
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
            active={currentStyle.has(style)}
            label={label}
            onClick={this.onControlClick(style)}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default EditorInlineStyleControls;

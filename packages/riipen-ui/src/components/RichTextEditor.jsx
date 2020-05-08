import PropTypes from "prop-types";
import React from "react";

import Editor from "./editor/Editor";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

class RichTextEditor extends React.Component {
  static propTypes = {
    /**
     * Optional array of whitelisted styles
     * ex. ['code-block', 'BOLD', 'LINK']
     */
    controlWhitelist: PropTypes.arrayOf(PropTypes.string),

    /**
     * An error to display below the input.
     */
    error: PropTypes.node,

    /**
     * An ID to set on the wrapper div of this component.
     */
    id: PropTypes.string,

    /**
     * Optional indicator to show if field is required.
     * Defaults to false.
     */
    isRequired: PropTypes.bool,

    /**
     * Optional form field label string.
     */
    label: PropTypes.string,

    /**
     * Optional max character length.
     * Shows a character count component if present.
     */
    maxLength: PropTypes.number,

    /**
     * Optional placeholder. Shows when there is no text.
     */
    placeholder: PropTypes.node,

    /**
     * Optional style applied to parent div of editor.
     * Used to set a minimum height.
     */
    style: PropTypes.object,

    /**
     * A warning to display below the input.
     */
    warning: PropTypes.node
  };

  static defaultProps = {
    isRequired: false
  };

  render() {
    const { error, label, id, isRequired, warning, ...other } = this.props;

    return (
      <div id={id}>
        {label && (
          <InputLabel htmlFor={id} required={isRequired}>
            {label}
          </InputLabel>
        )}
        <Editor error={error} {...other} />
        {error && (
          <Typography color="negative" variant="body2">
            {error}
          </Typography>
        )}
        {warning && (
          <Typography color="secondary" variant="body2">
            {warning}
          </Typography>
        )}
      </div>
    );
  }
}

export default RichTextEditor;

import PropTypes from "prop-types";
import React from "react";

import withForwardedRef from "../utils/withForwardedRef";

import Editor from "./editor/Editor";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

class RichTextEditor extends React.Component {
  static propTypes = {
    /**
     * The id of the element to use as the aria-label for the Editor.
     */
    ariaLabelledBy: PropTypes.string,

    /**
     * An error to display below the input.
     */
    error: PropTypes.node,

    /**
     * A reference to the Editor component.
     */
    forwardedRef: PropTypes.object,

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
     * A warning to display below the input.
     */
    warning: PropTypes.node
  };

  static defaultProps = {
    isRequired: false
  };

  render() {
    const {
      ariaLabelledBy,
      error,
      forwardedRef,
      label,
      id,
      isRequired,
      warning,
      ...other
    } = this.props;

    const ariaLabel = ariaLabelledBy || label;
    return (
      <div id={id}>
        {label && (
          <InputLabel id={ariaLabel} htmlFor={id} required={isRequired}>
            {label}
          </InputLabel>
        )}
        <Editor
          ariaLabelledBy={ariaLabel}
          error={error}
          ref={forwardedRef}
          {...other}
        />
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

export default withForwardedRef(RichTextEditor);

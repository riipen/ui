import PropTypes from "prop-types";
import React from "react";

import withForwardedRef from "../utils/withForwardedRef";

import Editor from "./Editor";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

class RichTextEditor extends React.Component {
  static displayName = "RichTextEditor";

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
     * The max height of the Editor text area.
     */
    maxHeight: PropTypes.string,

    /**
     * A warning to display below the input.
     */
    warning: PropTypes.node
  };

  static defaultProps = {
    isRequired: false,
    maxHeight: "auto"
  };

  render() {
    const {
      ariaLabelledBy,
      error,
      forwardedRef,
      label,
      id,
      isRequired,
      maxHeight,
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
          maxHeight={maxHeight}
          ref={forwardedRef}
          {...other}
        />
        {error && (
          <Typography component="div" color="negative" variant="body2">
            {error}
          </Typography>
        )}
        {warning && (
          <Typography component="div" color="secondary" variant="body2">
            {warning}
          </Typography>
        )}
      </div>
    );
  }
}

export default withForwardedRef(RichTextEditor);

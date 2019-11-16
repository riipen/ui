import PropTypes from "prop-types";
import React from "react";

import Input from "./Input";
import InputLabel from "./InputLabel";
import InputHint from "./InputHint";
import Typography from "./Typography";

class TextField extends React.Component {
  static propTypes = {
    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * An error to display below the input.
     */
    error: PropTypes.string,

    /**
     * Hint text to display under the label of the input.
     */
    hint: PropTypes.string,

    /**
     * Label text to display for the input.
     */
    label: PropTypes.string,

    /**
     * If true, an asterisk will be appended to the end of the label.
     */
    required: PropTypes.bool,

    /**
     * A warning to display below the input.
     */
    warning: PropTypes.string
  };

  render() {
    const { error, hint, label, required, warning, ...other } = this.props;

    return (
      <React.Fragment>
        {label && (
          <InputLabel htmlFor={other.id} required={required}>
            {label}
          </InputLabel>
        )}
        {hint && <InputHint>{hint}</InputHint>}
        <Input {...other} />
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
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

export default TextField;

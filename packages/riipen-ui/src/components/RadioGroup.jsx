import PropTypes from "prop-types";
import React from "react";

import withClasses from "../utils/withClasses";

import InputLabel from "./InputLabel";
import InputHint from "./InputHint";
import Typography from "./Typography";

class RadioGroup extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An error to display below the input.
     */
    error: PropTypes.node,

    /**
     * Hint text to display under the label of the input.
     */
    hint: PropTypes.node,

    /**
     * Label text to display for the input.
     */
    label: PropTypes.node,

    /**
     * Callback fired when a radio button is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    onChange: PropTypes.func,

    /**
     * If true, an asterisk will be appended to the end of the label.
     */
    required: PropTypes.bool,

    /**
     * A warning to display below the input.
     */
    warning: PropTypes.node
  };

  handleChange = e => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e, e.target.value);
    }
  };

  render() {
    const {
      children,
      error,
      hint,
      label,
      required,
      warning,
      ...other
    } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { onChange: this.handleChange })
    );

    return (
      <React.Fragment>
        <fieldset>
          {label && (
            <InputLabel htmlFor={other.name} required={required}>
              {label}
            </InputLabel>
          )}
          {hint && <InputHint>{hint}</InputHint>}
          {childrenWithProps}
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
        </fieldset>
        <style jsx>{`
          fieldset {
            border: none;
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses()(RadioGroup);

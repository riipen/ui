import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

const RadioGroup = ({
  children,
  error,
  hint,
  label,
  labelProps,
  onChange,
  required,
  suffix,
  value,
  warning,
  ...other
}) => {
  const handleChange = e => {
    if (onChange) {
      onChange(e, e.target.value);
    }
  };

  const childrenWithProps = React.Children.map(
    children || [],
    child =>
      child &&
      React.cloneElement(child, {
        checked: value === child.props.value,
        onChange: handleChange,
        ...child.props
      })
  ).filter(Boolean);

  return (
    <React.Fragment>
      <fieldset>
        {(label || hint || suffix) && (
          <InputLabel
            hint={hint}
            htmlFor={other.name}
            required={required}
            {...labelProps}
            suffix={suffix}
          >
            {label}
          </InputLabel>
        )}
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
          padding: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

RadioGroup.propTypes = {
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
   * Any props to pass through to the InputLabel.
   */
  labelProps: PropTypes.object,

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
   * Any suffix to display beside the label.
   */
  suffix: PropTypes.node,

  /**
   * The value of the selected radio button.
   */
  value: PropTypes.any,

  /**
   * A warning to display below the input.
   */
  warning: PropTypes.node
};

RadioGroup.displayName = "RadioGroup";

export default withClasses(RadioGroup);

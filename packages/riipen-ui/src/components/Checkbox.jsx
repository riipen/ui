import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Typography from "./Typography";

class Checkbox extends React.Component {
  static propTypes = {
    /**
     * If `true`, the component is checked.
     */
    checked: PropTypes.bool,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary", "default"]),

    /**
     * An error to display below the input.
     */
    error: PropTypes.string,

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

  static defaultProps = {
    checked: false,
    required: false
  };

  static contextType = ThemeContext;

  render() {
    const {
      checked,
      classes,
      color,
      error,
      label,
      required,
      warning,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx("checkbox", classes);

    return (
      <React.Fragment>
        <label htmlFor={other.id}>
          <Typography>
            {label}
            {required && " *"}
          </Typography>
          <input
            checked={checked}
            className={className}
            type="checkbox"
            {...other}
          />
          <span className={clsx("checkmark", color)} />
        </label>
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
        <style jsx>{`
          label {
            cursor: pointer;
            display: block;
            padding-left: 35px;
            position: relative;
            user-select: none;
          }

          /* Hide the browser's default checkbox */
          label input {
            cursor: pointer;
            height: 0;
            opacity: 0;
            position: absolute;
            width: 0;
          }

          /* Create a custom checkbox */
          .checkmark {
            background-color: ${theme.palette.common.white};
            border: 1px solid rgba(0, 0, 0, 0.23);
            border-radius: ${theme.shape.borderRadius.md};
            height: 20px;
            left: 0;
            position: absolute;
            top: 0;
            width: 20px;
          }

          /* When the checkbox is checked */
          label input:checked ~ .checkmark {
            background-color: ${theme.palette.grey[400]};
            border-color: ${theme.palette.grey[400]};
          }

          label input:checked ~ .primary {
            background-color: ${theme.palette.primary.main};
            border-color: ${theme.palette.primary.main};
          }
          label input:checked ~ .secondary {
            background-color: ${theme.palette.secondary.main};
            border-color: ${theme.palette.secondary.main};
          }

          /* Create the checkmark/indicator (hidden when not checked) */
          .checkmark:after {
            content: "";
            display: none;
            position: absolute;
          }

          /* Show the checkmark when checked */
          label input:checked ~ .checkmark:after {
            display: block;
          }

          /* Style the checkmark/indicator */
          label .checkmark:after {
            border: solid white;
            border-width: 0 3px 3px 0;
            height: 10px;
            left: 6px;
            top: 2px;
            transform: rotate(45deg);
            width: 5px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Checkbox;

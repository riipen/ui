import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
     * If `true`, the checkbox will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * An error to display below the checkbox.
     */
    error: PropTypes.node,

    /**
     * Label text to display for the checkbox.
     */
    label: PropTypes.node,

    /**
     * If true, an asterisk will be appended to the end of the label.
     */
    required: PropTypes.bool,

    /**
     * A warning to display below the checkbox.
     */
    warning: PropTypes.node
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    required: false
  };

  static contextType = ThemeContext;

  render() {
    const {
      checked,
      classes,
      color,
      disabled,
      error,
      label,
      required,
      warning,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx("checkbox");

    return (
      <div className={clsx(classes)}>
        <label htmlFor={other.id}>
          <Typography>
            {label}
            {required && " *"}
          </Typography>
          <input
            checked={checked}
            className={className}
            disabled={disabled}
            type="checkbox"
            {...other}
          />
          <span
            className={clsx("checkmark", disabled ? "disabled" : null, color)}
          />
        </label>
        {error && (
          <Typography
            classes={[clsx("error")]}
            color="negative"
            variant="body2"
          >
            {error}
          </Typography>
        )}
        {warning && (
          <Typography
            classes={[clsx("error")]}
            color="secondary"
            variant="body2"
          >
            {warning}
          </Typography>
        )}
        <style jsx>{`
          div {
            min-height: 20px;
          }

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

          label input:focus ~ .checkmark {
            outline: -webkit-focus-ring-color auto 5px;
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

          label input:checked ~ .disabled {
            background-color: ${theme.palette.grey[300]};
            border-color: ${theme.palette.grey[300]};
            pointer-events: none;
          }

          label + :global(.error) {
            margin-left: 35px !important;
            margin-top: ${theme.spacing(2)}px;
          }
        `}</style>
      </div>
    );
  }
}

export default withClasses(Checkbox);

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Typography from "./Typography";

class Radio extends React.Component {
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
     * If `true`, the radio will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Label text to display for the radio.
     */
    label: PropTypes.string
  };

  static defaultProps = {
    checked: false,
    disabled: false
  };

  static contextType = ThemeContext;

  render() {
    const { checked, classes, color, disabled, label, ...other } = this.props;

    const theme = this.context;

    return (
      <div className={clsx(classes)}>
        <label htmlFor={other.id}>
          <Typography>{label}</Typography>
          <input
            checked={checked}
            disabled={disabled}
            type="radio"
            {...other}
          />
          <span
            className={clsx("checkmark", disabled ? "disabled" : null, color)}
          />
        </label>
        <style jsx>{`
          label {
            cursor: pointer;
            display: block;
            margin-bottom: 12px;
            padding-left: 35px;
            position: relative;
            user-select: none;
          }

          /* Hide the browser's default checkbox */
          label input {
            cursor: pointer;
            opacity: 0;
            position: absolute;
          }

          /* Create a custom checkbox */
          .checkmark {
            box-sizing: content-box;
            background-color: #eee;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.23);
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
            background: white;
            border-radius: 50%;
            height: 10px;
            left: 5px;
            top: 5px;
            width: 10px;
          }

          .disabled {
            background-color: ${theme.palette.grey[300]};
            border-color: ${theme.palette.grey[300]};
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

export default withClasses(Radio);

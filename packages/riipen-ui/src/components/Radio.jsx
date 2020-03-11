import clsx from "clsx";
import css from "styled-jsx/css";
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

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      input:checked ~ p,
      input:disabled ~ p {
        color: ${theme.palette.grey[400]};
      }

      input:checked ~ p.primary {
        color: ${theme.palette.primary.main};
      }

      input:checked ~ p.secondary {
        color: ${theme.palette.secondary.main};
      }
    `;
  };

  static contextType = ThemeContext;

  render() {
    const { checked, classes, color, disabled, label, ...other } = this.props;

    const theme = this.context;

    const linkedStyles = this.getLinkedStyles();

    return (
      <div className={clsx(classes)}>
        <label htmlFor={other.id}>
          <input
            className={linkedStyles.className}
            checked={checked}
            disabled={disabled}
            type="radio"
            {...other}
          />
          <Typography classes={[linkedStyles.className, color]}>
            {label}
            {linkedStyles.styles}
          </Typography>
          <span
            className={clsx("checkmark", disabled ? "disabled" : null, color)}
          />
        </label>
        <style jsx>{`
          label {
            color: ${theme.palette.text.secondary};
            cursor: pointer;
            display: block;
            margin-bottom: 12px;
            padding-left: 23px;
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
            background-color: ${theme.palette.common.white};
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.23);
            height: 11px;
            left: 0;
            position: absolute;
            top: 3px;
            width: 11px;
          }

          /* When the checkbox is checked */
          label input:checked ~ .checkmark {
            border-color: ${theme.palette.grey[400]};
          }

          label input:checked ~ .primary {
            border-color: ${theme.palette.primary.main};
          }

          label input:checked ~ .secondary {
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
            background: ${theme.palette.grey[400]};
            border-radius: 50%;
            height: 7px;
            left: 2px;
            top: 2px;
            width: 7px;
          }

          label .primary.checkmark:after {
            background: ${theme.palette.primary.main};
          }

          label .secondary.checkmark:after {
            background: ${theme.palette.secondary.main};
          }

          .disabled {
            border-color: ${theme.palette.grey[400]};
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

export default withClasses(Radio);

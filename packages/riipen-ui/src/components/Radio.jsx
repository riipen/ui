import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Typography from "./Typography";

class Radio extends React.Component {
  static propTypes = {
    /**
     * If `true`, the component is checked.
     */
    checked: PropTypes.bool,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary", "default"]),

    /**
     * Label text to display for the radio.
     */
    label: PropTypes.string
  };

  static contextType = ThemeContext;

  render() {
    const { checked, color, label, ...other } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <label htmlFor={other.id}>
          <Typography>{label}</Typography>
          <input checked={checked} type="radio" {...other} />
          <span className={clsx("checkmark", color)} />
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
            height: 9px;
            left: 6px;
            top: 6px;
            width: 9px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Radio;

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Input extends React.Component {
  static propTypes = {
    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * If true, disables the input.
     */
    disabled: PropTypes.bool,

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: PropTypes.bool
  };

  static defaultProps = {
    disabled: false,
    multiline: false
  };

  static contextType = ThemeContext;

  render() {
    const { classes, disabled, multiline, ...other } = this.props;

    const theme = this.context;

    const className = clsx(disabled ? "disabled" : null, classes);

    let Component = "input";

    if (multiline) {
      Component = "textarea";
    }

    return (
      <React.Fragment>
        <Component className={className} {...other} />
        <style jsx>{`
          input,
          textarea {
            background-color: ${theme.palette.common.white};
            border: 1px solid rgba(0, 0, 0, 0.23);
            border-radius: ${theme.shape.borderRadius.md};
            box-sizing: border-box;
            color: ${theme.palette.text.primary};
            font-family: ${theme.typography.fontFamily};
            font-size: 14px;
            outline: none;
            padding: ${theme.spacing(2)}px;
            position: relative;
            transition: all ${theme.transitions.duration.standard}ms;
            width: 100%;
          }

          input:focus,
          textarea:focus {
            border-color: ${theme.palette.secondary.main};
            outline: 0;
          }

          .disabled {
            opacity: 0.5;
            pointer-events: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Input;

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import InputLabel from "./InputLabel";
import InputHint from "./InputHint";
import Typography from "./Typography";

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
     * An error to display below the input.
     */
    error: PropTypes.node,

    /**
     * Hint text to display under the label of the input.
     */
    hint: PropTypes.string,

    /**
     * Label text to display for the input.
     */
    label: PropTypes.string,

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: PropTypes.bool,

    /**
     * If true, an asterisk will be appended to the end of the label.
     */
    required: PropTypes.bool,

    /**
     * A warning to display below the input.
     */
    warning: PropTypes.node
  };

  static defaultProps = {
    disabled: false,
    multiline: false
  };

  static contextType = ThemeContext;

  render() {
    const {
      classes,
      disabled,
      error,
      hint,
      label,
      multiline,
      required,
      warning,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    let Component = "input";

    if (multiline) {
      Component = "textarea";
    }

    const componentClassName = clsx(
      error ? "error" : null,
      disabled ? "disabled" : null,
      warning ? "warning" : null
    );

    return (
      <div className={className}>
        {label && (
          <InputLabel htmlFor={other.id || other.name} required={required}>
            {label}
          </InputLabel>
        )}
        {hint && <InputHint>{hint}</InputHint>}
        <Component
          className={componentClassName}
          disabled={disabled}
          {...other}
        />
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
            border-color: ${theme.palette.tertiary.main};
            outline: 0;
          }

          .disabled {
            opacity: 0.5;
            pointer-events: none;
          }

          .error {
            border-color: ${theme.palette.negative.main};
          }

          .warning {
            border-color: ${theme.palette.warning.main};
          }
        `}</style>
      </div>
    );
  }
}

export default withClasses()(Input);

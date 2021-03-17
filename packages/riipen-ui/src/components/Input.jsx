import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext, useIsFocusVisible } from "../utils";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

const Input = props => {
  const {
    classes,
    disabled,
    error,
    hint,
    label,
    labelColor,
    labelWeight,
    multiline,
    required,
    theme,
    warning,
    ...other
  } = props;

  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const handleFocus = e => {
    setFocusVisible(isFocusVisible(e));
  };

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const className = clsx(classes);

  let Component = "input";

  if (multiline) {
    Component = "textarea";
  }

  const componentClassName = clsx(
    error ? "error" : null,
    disabled ? "disabled" : null,
    warning ? "warning" : null,
    focusVisible ? "focusVisible" : null
  );

  return (
    <div className={className}>
      {(label || hint) && (
        <InputLabel
          color={labelColor}
          hint={hint}
          htmlFor={other.id || other.name}
          required={required}
          weight={labelWeight}
        >
          {label}
        </InputLabel>
      )}
      <Component
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={componentClassName}
        disabled={disabled}
        aria-disabled={disabled}
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
          font-size: ${theme.typography.body1.fontSize};
          line-height: 1;
          outline: none;
          padding: ${theme.spacing(2)}px;
          position: relative;
          transition: all ${theme.transitions.duration.standard}ms;
          width: 100%;
        }

        input:focus,
        textarea:focus {
          outline: 0;
        }

        input.focusVisible,
        textarea.focusVisible {
          border-color: ${theme.palette.tertiary.main};
          outline: 5px auto -webkit-focus-ring-color;
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
};

Input.defaultProps = {
  disabled: false,
  multiline: false
};

Input.propTypes = {
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
   * Label text colour.
   */
  labelColor: PropTypes.string,

  /**
   * Label text weight.
   */
  labelWeight: PropTypes.string,

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,

  /**
   * If true, an asterisk will be appended to the end of the label.
   */
  required: PropTypes.bool,

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * A warning to display below the input.
   */
  warning: PropTypes.node
};

Input.displayName = "Input";

export default withThemeContext(Input);

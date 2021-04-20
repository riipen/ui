import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext, useIsFocusVisible } from "../utils";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

const Input = ({
  classes,
  disabled,
  endAdornment,
  error,
  hint,
  label,
  meta,
  multiline,
  required,
  size,
  startAdornment,
  theme,
  variant,
  warning,
  ...other
}) => {
  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const handleFocus = (e) => {
    setFocusVisible(isFocusVisible(e));
  };

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const className = clsx(classes, "wrapper");

  let Component = "input";

  if (multiline) {
    Component = "textarea";
  }

  const componentClassName = clsx(
    endAdornment ? "endPadding" : null,
    error ? "error" : null,
    disabled ? "disabled" : null,
    startAdornment ? "startPadding" : null,
    warning ? "warning" : null,
    focusVisible ? "focusVisible" : null,
    variant,
    size
  );

  return (
    <div className={className}>
      {(label || hint) && (
        <InputLabel
          hint={hint}
          htmlFor={other.id || other.name}
          required={required}
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
      {startAdornment && (
        <span className={clsx("adornment", "start", size)}>
          {startAdornment}
        </span>
      )}
      {endAdornment && (
        <span className={clsx("adornment", "end", size)}>{endAdornment}</span>
      )}
      {(error || warning || meta) && (
        <div className="bottom">
          <div>
            {error && (
              <Typography color="negative" component="div" variant="body2">
                {error}
              </Typography>
            )}
            {warning && (
              <Typography color="secondary" component="div" variant="body2">
                {warning}
              </Typography>
            )}
          </div>
          {meta && (
            <Typography color="grey600" component="span" variant="body2">
              {meta}
            </Typography>
          )}
        </div>
      )}
      <style jsx>{`
        .bottom {
          display: flex;
          justify-content: space-between;
        }

        .adornment {
          position: absolute;
        }

        .adornment.large {
          font-size: ${theme.typography.h4.fontSize};
          padding: 17px;
        }

        .adornment.medium {
          font-size: ${theme.typography.h5.fontSize};
        }

        .adornment.small {
          font-size: ${theme.typography.body2.fontSize};
          padding: 7px;
        }

        .default {
          background-color: ${theme.palette.common.white};
          border: 1px solid rgba(0, 0, 0, 0.23);
          border-radius: ${theme.shape.borderRadius.md};
        }

        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .large {
          font-size: ${theme.typography.h2.fontSize};
        }

        .medium {
          padding: ${theme.spacing(2)}px;
        }

        .small {
          padding-bottom: ${theme.spacing(1)}px;
          padding-top: ${theme.spacing(1)}px;
        }

        .error {
          border-color: ${theme.palette.negative.main};
        }

        input,
        textarea {
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

        .end {
          margin-right: ${theme.spacing(2)}px;
          right: 0;
        }

        .end.large {
          margin-right: 0;
        }

        .endPadding {
          padding-right: ${theme.spacing(9)}px;
        }

        .endPadding.large {
          padding-right: ${theme.spacing(11)}px;
        }

        .start {
          left: 0;
          margin-left: ${theme.spacing(2)}px;
        }

        .start.large {
          margin-left: 0;
        }

        .startPadding {
          padding-left: ${theme.spacing(9)}px;
        }

        .startPadding.large {
          padding-left: ${theme.spacing(11)}px;
        }

        .underlined {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.23);
        }

        .warning {
          border-color: ${theme.palette.warning.main};
        }

        .wrapper {
          position: relative;
        }
      `}</style>
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  multiline: false,
  size: "medium",
  variant: "default"
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
   * Content to render on the right side of the input.
   */
  endAdornment: PropTypes.node,

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
  label: PropTypes.node,

  /**
   * Any text to display under the right side of the input.
   */
  meta: PropTypes.node,

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,

  /**
   * If true, an asterisk will be appended to the end of the label.
   */
  required: PropTypes.bool,

  /**
   * A whitelisted set of sizes that the input can be rendered at.
   */
  size: PropTypes.oneOf(["large", "medium", "small"]),

  /**
   * Content to render on the left side of the input.
   */
  startAdornment: PropTypes.node,

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The input variant styling to apply.
   */
  variant: PropTypes.oneOf(["default", "underlined"]),
  /**
   * A warning to display below the input.
   */
  warning: PropTypes.node
};

Input.displayName = "Input";

export default withThemeContext(Input);

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
  error,
  hint,
  icon: Icon,
  label,
  labelColor,
  labelWeight,
  multiline,
  required,
  size,
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

  const className = clsx(classes);

  let Component = "input";

  if (multiline) {
    Component = "textarea";
  }

  const componentClassName = clsx(
    error ? "error" : null,
    disabled ? "disabled" : null,
    Icon ? "iconPadding" : null,
    warning ? "warning" : null,
    focusVisible ? "focusVisible" : null,
    variant,
    size
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
      {Icon && (
        <span className={clsx("icon", size)}>
          {typeof Icon === "function" ? <Icon /> : Icon}
        </span>
      )}
      {error && (
        <Typography color="negative" component="span" variant="body2">
          {error}
        </Typography>
      )}
      {warning && (
        <Typography color="secondary" component="span" variant="body2">
          {warning}
        </Typography>
      )}
      <style jsx>{`
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

        .default {
          background-color: ${theme.palette.common.white};
          border: 1px solid rgba(0, 0, 0, 0.23);
          border-radius: ${theme.shape.borderRadius.md};
        }

        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .error {
          border-color: ${theme.palette.negative.main};
        }

        .icon {
          color: ${theme.palette.grey[500]};
          left: ${theme.spacing(4)}px;
          position: absolute;
        }

        .icon.small {
          font-size: ${theme.typography.body2.fontSize};
          padding: 7px;
        }

        .icon.medium {
          font-size: ${theme.typography.h5.fontSize};
        }

        .icon.large {
          font-size: ${theme.typography.h4.fontSize};
          padding: 17px;
        }

        .iconPadding.small {
          padding-left: ${theme.spacing(9)}px;
        }

        .iconPadding.medium {
          padding-left: ${theme.spacing(9)}px;
        }

        .iconPadding.large {
          padding-left: ${theme.spacing(12)}px;
        }

        .small {
          padding-bottom: ${theme.spacing(1)}px;
          padding-top: ${theme.spacing(1)}px;
        }

        .large {
          font-size: ${theme.typography.h2.fontSize};
        }

        .underlined {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.23);
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
   * An error to display below the input.
   */
  error: PropTypes.node,

  /**
   * Hint text to display under the label of the input.
   */
  hint: PropTypes.string,

  /**
   * A icon to render on the left side of the input.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),

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
   * A whitelisted set of sizes that the input can be rendered at.
   */
  size: PropTypes.oneOf(["large", "medium", "small"]),

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

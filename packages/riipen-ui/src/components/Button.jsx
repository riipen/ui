import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { useIsFocusVisible, withThemeContext } from "../utils";

const Button = props => {
  const {
    children,
    classes,
    color,
    theme,
    component,
    disabled,
    fullWidth,
    iconEnd: IconEnd,
    iconStart: IconStart,
    mobileBreakpoint,
    size,
    type,
    variant,
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

  const className = clsx(
    "root",
    disabled ? "disabled" : null,
    focusVisible ? "focusVisible" : null,
    fullWidth ? "full-width" : null,
    size,
    variant,
    variant === "contained" ? `contained-${color}` : null,
    variant === "text" ? `text-${color}` : null,
    variant === "outlined" ? `outlined-${color}` : null,
    variant === "inverted" ? `inverted-${color}` : null,
    classes
  );

  let Component = component || other.href ? "a" : "button";
  if (component) Component = component;

  return (
    <>
      <Component
        ref={ref}
        className={className}
        disabled={disabled}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...other}
      >
        <span className={clsx("label")}>
          {IconStart && (
            <span className={clsx("icon", "icon-start")}>
              {typeof IconStart === "function" ? <IconStart /> : IconStart}
            </span>
          )}
          {children}
          {IconEnd && (
            <span className={clsx("icon", "icon-end")}>
              {typeof IconEnd === "function" ? <IconEnd /> : IconEnd}
            </span>
          )}
        </span>
      </Component>
      <style jsx>{`
        .root {
          background-color: ${theme.palette.grey[300]};
          border: 0;
          border-radius: ${theme.shape.borderRadius.md};
          color: ${theme.palette.text.primary};
          cursor: pointer;
          display: inline-flex;
          min-width: 130px;
          padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
          outline: 0;
          transition: all ${theme.transitions.duration.standard}ms;
          user-select: none;
        }

        .root.focusVisible {
          outline: 5px auto -webkit-focus-ring-color;
        }
        .root:active,
        .root:focus,
        .root:hover {
          background-color: ${theme.palette.grey[400]};
        }

        a.root {
          min-width: 100px;
          text-decoration: none;
        }

        .icon {
          font-size: 15px;
        }
        .icon > svg {
          display: flex;
        }

        .icon-start {
          margin-right: ${theme.spacing(2)}px;
        }
        .icon-end {
          margin-left: ${theme.spacing(2)}px;
        }

        .full-width {
          display: block;
          width: 100%;
        }

        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .small {
          padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
          min-width: 60px;
        }
        .large {
          padding: ${theme.spacing(3)}px ${theme.spacing(5)}px;
        }

        .contained-primary {
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrast};
        }
        .contained-primary:active,
        .contained-primary:focus,
        .contained-primary:hover {
          background-color: ${theme.palette.primary.dark};
        }
        .contained-secondary {
          background-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.contrast};
        }
        .contained-secondary:active,
        .contained-secondary:focus,
        .contained-secondary:hover {
          background-color: ${theme.palette.secondary.dark};
        }
        .contained-tertiary {
          background-color: ${theme.palette.tertiary.main};
          color: ${theme.palette.tertiary.contrast};
        }
        .contained-tertiary:active,
        .contained-tertiary:focus,
        .contained-tertiary:hover {
          background-color: ${theme.palette.tertiary.dark};
        }
        .contained-white {
          background-color: ${theme.palette.common.white};
          color: ${theme.palette.common.black};
        }
        .contained-white:active,
        .contained-white:focus,
        .contained-white:hover {
          background-color: ${theme.palette.grey[100]};
        }
        .contained-positive {
          background-color: ${theme.palette.positive.main};
          color: ${theme.palette.positive.contrast};
        }
        .contained-positive:active,
        .contained-positive:focus,
        .contained-positive:hover {
          background-color: ${theme.palette.positive.dark};
        }
        .contained-negative {
          background-color: ${theme.palette.negative.main};
          color: ${theme.palette.negative.contrast};
        }
        .contained-negative:active,
        .contained-negative:focus,
        .contained-negative:hover {
          background-color: ${theme.palette.negative.dark};
        }

        .text {
          background-color: transparent;
          color: ${theme.palette.text.primary};
          overflow: hidden;
          position: relative;
        }
        .text:hover {
          background-color: transparent;
        }
        .text:hover::before {
          background-color: ${theme.palette.grey[600]};
          bottom: 0;
          content: "";
          left: 0;
          opacity: 0.1;
          position: absolute;
          right: 0;
          top: 0;
        }

        .text-primary {
          color: ${theme.palette.primary.main};
        }
        .text-primary:hover::before {
          background-color: ${theme.palette.primary.main};
        }
        .text-secondary {
          color: ${theme.palette.secondary.main};
        }
        .text-secondary:hover::before {
          background-color: ${theme.palette.secondary.main};
        }
        .text-tertiary {
          color: ${theme.palette.tertiary.main};
        }
        .text-tertiary:hover::before {
          background-color: ${theme.palette.tertiary.main};
        }
        .text-white {
          color: ${theme.palette.common.white};
        }
        .text-white:hover::before {
          background-color: ${theme.palette.grey[100]};
        }
        .text-positive {
          color: ${theme.palette.positive.main};
        }
        .text-positive:hover::before {
          background-color: ${theme.palette.positive.main};
        }
        .text-negative {
          color: ${theme.palette.negative.main};
        }
        .text-negative:hover::before {
          background-color: ${theme.palette.negative.main};
        }

        .outlined {
          background-color: transparent;
          color: ${theme.palette.text.primary};
          overflow: hidden;
          position: relative;
        }
        .outlined::after {
          border-radius: ${theme.shape.borderRadius.md};
          border: 1px solid rgba(0, 0, 0, 0.23);
          bottom: 0;
          content: "";
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
        .outlined:hover {
          background-color: transparent;
        }
        .outlined:hover::before {
          background-color: ${theme.palette.grey[600]};
          bottom: 0;
          content: "";
          left: 0;
          opacity: 0.1;
          position: absolute;
          right: 0;
          top: 0;
        }

        .outlined-primary {
          color: ${theme.palette.primary.main};
        }
        .outlined-primary:hover::before {
          background-color: ${theme.palette.primary.main};
        }
        .outlined-primary::after {
          border-color: ${theme.palette.primary.main};
        }
        .outlined-secondary {
          color: ${theme.palette.secondary.main};
        }
        .outlined-secondary:hover::before {
          background-color: ${theme.palette.secondary.main};
        }
        .outlined-secondary::after {
          border-color: ${theme.palette.secondary.main};
        }
        .outlined-tertiary {
          color: ${theme.palette.tertiary.main};
        }
        .outlined-tertiary:hover::before {
          background-color: ${theme.palette.tertiary.main};
        }
        .outlined-tertiary::after {
          border-color: ${theme.palette.tertiary.main};
        }
        .outlined-white {
          color: ${theme.palette.common.white};
        }
        .outlined-white:hover::before {
          background-color: ${theme.palette.grey[100]};
        }
        .outlined-white::after {
          border-color: ${theme.palette.common.white};
        }
        .outlined-positive {
          color: ${theme.palette.positive.main};
        }
        .outlined-positive:hover::before {
          background-color: ${theme.palette.positive.main};
        }
        .outlined-positive::after {
          border-color: ${theme.palette.positive.main};
        }
        .outlined-negative {
          color: ${theme.palette.negative.main};
        }
        .outlined-negative:hover::before {
          background-color: ${theme.palette.negative.main};
        }
        .outlined-negative::after {
          border-color: ${theme.palette.negative.main};
        }

        .inverted {
          background-color: white;
          color: ${theme.palette.text.primary};
          overflow: hidden;
          position: relative;
        }
        .inverted::after {
          border-radius: ${theme.shape.borderRadius.md};
          border: 1px solid transparent;
          bottom: 0;
          content: "";
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
        .inverted:hover::before {
          bottom: 0;
          content: "";
          left: 0;
          opacity: 1;
          position: absolute;
          right: 0;
          top: 0;
        }

        .inverted-primary {
          color: ${theme.palette.primary.main};
        }
        .inverted-primary:hover {
          color: ${theme.palette.common.white};
          background-color: ${theme.palette.primary.main};
        }
        .inverted-secondary {
          color: ${theme.palette.secondary.main};
        }
        .inverted-secondary:hover {
          color: ${theme.palette.common.white};
          background-color: ${theme.palette.secondary.main};
        }
        .inverted-tertiary {
          color: ${theme.palette.tertiary.main};
        }
        .inverted-tertiary:hover {
          color: ${theme.palette.common.white};
          background-color: ${theme.palette.tertiary.main};
        }
        .inverted-positive {
          color: ${theme.palette.positive.main};
        }
        .inverted-positive:hover {
          color: ${theme.palette.common.white};
          background-color: ${theme.palette.positive.main};
        }
        .inverted-negative {
          color: ${theme.palette.negative.main};
        }
        .inverted-negative:hover {
          color: ${theme.palette.common.white};
          background-color: ${theme.palette.negative.main};
        }

        .label {
          align-items: center;
          display: flex;
          font-family: ${theme.typography.fontFamily};
          font-size: ${theme.typography.button.fontSize};
          font-weight: ${theme.typography.fontWeight.medium};
          justify-content: center;
          letter-spacing: 1px;
          line-height: ${theme.typography.button.lineHeight};
          text-align: center;
          text-transform: uppercase;
          width: 100%;
          word-break: normal;
        }

        @media (max-width: ${theme.breakpoints[mobileBreakpoint]}px) {
          .icon {
            font-size: ${theme.typography.button.mobile.fontSize};
          }

          .icon-end {
            margin-left: ${theme.spacing(1)}px;
          }

          .icon-start {
            margin-right: ${theme.spacing(1)}px;
          }

          .label {
            font-size: ${theme.typography.button.mobile.fontSize};
            line-height: ${theme.typography.button.mobile.lineHeight};
          }
        }
      `}</style>
    </>
  );
};

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The color to use.
   */
  color: PropTypes.oneOf([
    "default",
    "negative",
    "positive",
    "primary",
    "secondary",
    "tertiary",
    "white"
  ]),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,

  /**
   * Element placed after the children.
   */
  iconEnd: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),

  /**
   * Element placed before the children.
   */
  iconStart: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),

  /**
   * The breakpoint to display the mobile button styling.
   */
  mobileBreakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

  /**
   * The size of the chip.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The type of button, determining functionality.
   */
  type: PropTypes.oneOf(["button", "reset", "submit"]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["text", "outlined", "contained", "inverted"])
};

Button.defaultProps = {
  classes: [],
  color: "default",
  disabled: false,
  fullWidth: false,
  mobileBreakpoint: "sm",
  size: "medium",
  type: "button",
  variant: "text"
};

Button.displayName = "Button";

export default withThemeContext(Button);

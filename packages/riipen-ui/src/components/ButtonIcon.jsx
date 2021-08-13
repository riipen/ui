import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext, useIsFocusVisible } from "../utils";
import withClasses from "../utils/withClasses";

const ButtonIcon = props => {
  const {
    children,
    classes,
    color,
    component,
    disabled,
    size,
    theme,
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
    size,
    variant,
    `${variant}-${color}`,
    classes
  );

  let Component = other.href ? "a" : "button";

  if (component) Component = component;

  return (
    <>
      <Component
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={className}
        disabled={disabled}
        {...other}
      >
        <span className={clsx("label", `icon-${size}`, `font-${size}`)}>
          {children}
        </span>
      </Component>
      <style jsx>{`
        .root {
          background-color: transparent;
          border: 0;
          cursor: pointer;
          display: inline-flex;
          padding: ${theme.spacing(2)}px;
          position: relative;
          outline: 0;
          transition: all ${theme.transitions.duration.standard}ms;
          user-select: none;
        }

        a.root {
          border: none;
          text-decoration: none;
        }

        .icon:active::before,
        .icon.focusVisible::before,
        .icon:hover::before {
          border-radius: 50%;
          bottom: 0;
          content: "";
          left: 0;
          opacity: 0.1;
          position: absolute;
          right: 0;
          top: 0;
        }

        .icon-default,
        .icon-default:hover {
          color: ${theme.palette.text.secondary};
        }
        .icon-default:active::before,
        .icon-default.focusVisible::before,
        .icon-default:hover::before {
          background-color: ${theme.palette.text.secondary};
        }
        .icon-primary,
        .icon-primary:hover {
          color: ${theme.palette.primary.main};
        }
        .icon-primary:active::before,
        .icon-primary.focusVisible::before,
        .icon-primary:hover::before {
          background-color: ${theme.palette.primary.main};
        }
        .icon-secondary,
        .icon-secondary:hover {
          color: ${theme.palette.secondary.main};
        }
        .icon-secondary:active::before,
        .icon-secondary.focusVisible::before,
        .icon-secondary:hover::before {
          background-color: ${theme.palette.secondary.main};
        }
        .icon-tertiary,
        .icon-tertiary:hover {
          color: ${theme.palette.tertiary.main};
        }
        .icon-tertiary:hover::before {
          .icon-tertiary: active: : before,
            .icon-tertiary.focusVisible: : before,
            background-color: ${theme.palette.tertiary.main};
        }
        .icon-white,
        .icon-white:hover {
          color: ${theme.palette.common.white};
        }
        .icon-white:hover::before {
          .icon-white: active: : before, .icon-white.focusVisible: : before,
            background-color: ${theme.palette.common.white};
        }

        .outlined {
          background-color: transparent;
          overflow: hidden;
          position: relative;
        }
        .outlined::after {
          border: 1px solid rgba(0, 0, 0, 0.23);
          border-radius: 50%;
          bottom: 0;
          content: "";
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
        .outlined:active::before,
        .outlined.focusVisible::before,
        .outlined:hover::before {
          border-radius: 50%;
          bottom: 0;
          content: "";
          left: 0;
          opacity: 0.1;
          position: absolute;
          right: 0;
          top: 0;
        }

        .outlined-default::after {
          border-color: ${theme.palette.text.secondary};
        }
        .outlined-default,
        .outlined-default:hover {
          color: ${theme.palette.text.secondary};
        }
        .outlined-default:active::before,
        .outlined-default.focusVisible::before,
        .outlined-default:hover::before {
          background-color: ${theme.palette.text.secondary};
        }
        .outlined-primary::after {
          border-color: ${theme.palette.primary.main};
        }
        .outlined-primary,
        .outlined-primary:hover {
          color: ${theme.palette.primary.main};
        }
        .outlined-primary:active::before,
        .outlined-primary.focusVisible::before,
        .outlined-primary:hover::before {
          background-color: ${theme.palette.primary.main};
        }
        .outlined-secondary::after {
          border-color: ${theme.palette.secondary.main};
        }
        .outlined-secondary,
        .outlined-secondary:hover {
          color: ${theme.palette.secondary.main};
        }
        .outlined-secondary:active::before,
        .outlined-secondary.focusVisible::before,
        .outlined-secondary:hover::before {
          background-color: ${theme.palette.secondary.main};
        }
        .outlined-tertiary::after {
          border-color: ${theme.palette.tertiary.main};
        }
        .outlined-tertiary,
        .outlined-tertiary:hover {
          color: ${theme.palette.tertiary.main};
        }
        .outlined-tertiary:hover::before {
          .outlined-tertiary: active: : before,
            .outlined-tertiary.focusVisible: : before,
            background-color: ${theme.palette.tertiary.main};
        }
        .outlined-white::after {
          border-color: ${theme.palette.common.white};
        }
        .outlined-white,
        .outlined-white:hover {
          color: ${theme.palette.common.white};
        }
        .outlined-white:hover::before {
          .outlined-white: active: : before,
            .outlined-white.focusVisible: : before,
            background-color: ${theme.palette.common.white};
        }

        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .label {
          align-items: center;
          display: flex;
          font-size: 18px;
          justify-content: center;
          text-align: center;
          width: 100%;
        }

        .icon-small {
          height: 16px;
          width: 16px;
        }
        .icon-medium {
          height: 18px;
          width: 18px;
        }
        .icon-large {
          height: 20px;
          width: 20px;
        }

        .font-small {
          font-size: 16px;
        }
        .font-large {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

ButtonIcon.propTypes = {
  /**
   * The icon element.
   */
  children: PropTypes.node.isRequired,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The color to use.
   */
  color: PropTypes.oneOf([
    "default",
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
   * The size of the chip.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["icon", "outlined"])
};

ButtonIcon.defaultProps = {
  classes: [],
  color: "default",
  disabled: false,
  size: "medium",
  variant: "icon"
};

ButtonIcon.displayName = "ButtonIcon";

export default withThemeContext(withClasses(ButtonIcon));

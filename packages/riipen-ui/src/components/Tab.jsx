import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { useIsFocusVisible, withThemeContext } from "../utils";

const Tab = props => {
  const {
    active,
    breakpoint,
    classes,
    color,
    disabled,
    displayActive,
    fullWidth,
    icon: Icon,
    label,
    onClick,
    orientation,
    theme,
    value
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

  const handleChange = e => {
    if (!onClick || disabled) {
      return;
    }

    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onClick(e, value);
    }

    return;
  };

  const className = clsx(
    "root",
    orientation === "horizontal" && breakpoint !== "none" ? "breakpoint" : null,
    active || displayActive ? `${color}-active` : null,
    active || displayActive ? `${orientation}-active` : null,
    color,
    disabled ? "disabled" : null,
    focusVisible ? "focusVisible" : null,
    fullWidth ? "full-width" : null,
    orientation,
    classes
  );

  return (
    <React.Fragment>
      <div
        tabIndex="0"
        role="button"
        ref={ref}
        aria-pressed={active}
        aria-disabled={disabled}
        className={className}
        onClick={handleChange}
        onKeyDown={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {Icon && <Icon className={clsx("icon")} />}
        {label && <div className={clsx("label")}>{label}</div>}
      </div>
      <style jsx>{`
        .root {
          align-items: center;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          height: 100%;
          min-width: 72px;
          outline: 0;
          padding: ${theme.spacing(3)}px ${theme.spacing(6)}px;
          text-align: center;
          transition: all ${theme.transitions.duration.standard}ms;
        }

        .root.focusVisible {
          outline: 5px auto -webkit-focus-ring-color;
        }

        .icon + * {
          margin-left: ${theme.spacing(2)}px;
        }

        .icon {
          margin-bottom: 1px;
        }

        .label {
          font-family: ${theme.typography.fontFamily};
          font-weight: ${theme.typography.fontWeight.regular};
          font-size: 14px;
          letter-spacing: 2px;
          line-height: 1.4;
          text-decoration: none;
          text-transform: uppercase;
          width: 100%;
        }

        .vertical {
          border-bottom: 0;
          border-right: 3px solid transparent;
          padding: ${theme.spacing()}px ${theme.spacing(5)}px;
          text-align: left;
        }

        .vertical-active {
          background-color: ${theme.palette.grey[50]};
        }

        .primary-active {
          border-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.main};
        }
        .primary:hover {
          color: ${theme.palette.primary.main};
        }
        .secondary-active {
          border-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.main};
        }
        .secondary:hover {
          color: ${theme.palette.secondary.main};
        }

        .disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .full-width {
          flex-basis: 0;
          flex-grow: 1;
          flex-shrink: 1;
          max-width: none;
        }

        @media (max-width: ${theme.breakpoints[breakpoint]}px) {
          .breakpoint {
            margin: 0 ${theme.spacing(1)}px;
            padding: ${theme.spacing(2)}px 0;
            position: relative;
          }

          .breakpoint:not(:last-child)::after {
            border-right: 1px solid ${theme.palette.divider};
            content: "";
            height: ${theme.spacing(6)}px;
            position: absolute;
            right: ${theme.spacing(-1)}px;
          }

          .breakpoint > * {
            font-size: ${theme.typography.body2.fontSize};
            padding: ${theme.spacing(1)}px ${theme.spacing(3)}px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Tab.defaultProps = {
  active: false,
  breakpoint: "sm",
  color: "secondary",
  disabled: false,
  fullWidth: false,
  orientation: "horizontal"
};

Tab.propTypes = {
  /**
   * If `true`, the tab indicator will be displayed.
   */
  active: PropTypes.bool,

  /**
   * The breakpoint to display the mobile tab styling. Use "none" for no styling.
   */
  breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl", "none"]),

  /**
   * An array of custom CSS classes to apply.
   */
  classes: PropTypes.array,

  /**
   * Determines the color of the indicator.
   */
  color: PropTypes.oneOf(["primary", "secondary"]),

  /**
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true` will force the tab to be displayed active
   */
  displayActive: PropTypes.bool,

  /**
   * If `true`, will make the tab grow to use all the available space,
   */
  fullWidth: PropTypes.bool,

  /**
   * The icon element.
   */
  icon: PropTypes.elementType,

  /**
   * The label element
   */
  label: PropTypes.node,

  /**
   * Callback fired when the tab is clicked.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onClick: PropTypes.func,

  /**
   * The indicator orientation.
   */
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The value provided when a click event is dispatched.
   */
  value: PropTypes.any.isRequired
};

Tab.displayName = "Tab";

export default withThemeContext(Tab);

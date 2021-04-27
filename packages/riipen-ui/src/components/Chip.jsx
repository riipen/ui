import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import useIsFocusVisible from "../utils/useIsFocusVisible";
import withClasses from "../utils/withClasses";
import withThemeContext from "../utils/withThemeContext";

const Chip = ({
  children,
  classes,
  color,
  component: Component,
  disabled,
  hover,
  icon,
  label,
  onClick,
  size,
  theme,
  variant,
  ...other
}) => {
  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const clickable = !!onClick;

  const className = clsx(
    "root",
    color,
    disabled ? "disabled" : null,
    size,
    variant,
    classes,
    { clickable },
    { focusVisible },
    hover ? "hover" : null
  );

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const handleFocus = e => {
    setFocusVisible(isFocusVisible(e));
  };

  return (
    <React.Fragment>
      <Component
        className={className}
        onBlur={handleBlur}
        onClick={onClick}
        onFocus={handleFocus}
        ref={ref}
        tabIndex={clickable ? "0" : undefined}
        {...other}
      >
        {icon && <span className="icon">{icon}</span>}
        <span className={clsx("label")}>{label || children}</span>
      </Component>
      <style jsx>{`
        .root {
          background-color: ${theme.palette.grey[300]};
          border-radius: 50px;
          border: 1px solid;
          border-color: transparent;
          box-sizing: border-box;
          color: ${theme.palette.text.secondary};
          cursor: default;
          display: inline-flex;
          font-family: ${theme.typography.fontFamily};
          font-size: ${theme.typography.body1.fontSize};
          justify-content: center;
          outline: 0;
          vertical-align: middle;
          white-space: nowrap;
        }
        .root.xsmall {
          padding: 1px ${theme.spacing(1)}px;
        }
        .root.small {
          padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
        }
        .root.medium {
          padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
        }
        .root.disabled {
          opacity: 0.6;
          pointer-events: none;
        }
        .root.clickable {
          cursor: pointer;
        }
        .root.clickable:hover,
        .root.focusVisible,
        .root.hover:hover {
          background-color: transparent;
          border: 1px solid ${theme.palette.text.primary};
        }
        .icon {
          align-items: center;
          display: flex;
          padding-right: ${theme.spacing(2)}px;
          white-space: nowrap;
        }

        .label {
          align-items: center;
          display: flex;
          white-space: nowrap;
        }

        .primary {
          background-color: ${theme.palette.primary.main};
          border-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrast};
        }
        .primary.clickable:hover,
        .primary.focusVisible,
        .primary.hover:hover {
          border-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.main};
        }
        .primary.outlined {
          border-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.main};
        }
        .primary.outlined.clickable:hover,
        .primary.outlined.focusVisible,
        .primary.outlined.hover:hover {
          background-color: ${theme.palette.primary.main};
          border-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrast};
        }

        .secondary {
          background-color: ${theme.palette.secondary.main};
          border-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.contrast};
        }
        .secondary.clickable:hover,
        .secondary.focusVisible,
        .secondary.hover:hover {
          border-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.main};
        }
        .secondary.outlined {
          border-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.main};
        }
        .secondary.outlined.clickable:hover,
        .secondary.outlined.focusVisible,
        .secondary.outlined.hover:hover {
          background-color: ${theme.palette.secondary.main};
          border-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.contrast};
        }
        .tertiary {
          background-color: ${theme.palette.tertiary.main};
          border-color: ${theme.palette.tertiary.main};
          color: ${theme.palette.tertiary.contrast};
        }
        .tertiary.clickable:hover,
        .tertiary.focusVisible,
        .tertiary.hover:hover {
          border-color: ${theme.palette.tertiary.main};
          color: ${theme.palette.tertiary.main};
        }
        .tertiary.outlined {
          border-color: ${theme.palette.tertiary.main};
          color: ${theme.palette.tertiary.main};
        }
        .tertiary.outlined.clickable:hover,
        .tertiary.outlined.focusVisible,
        .tertiary.outlined.hover:hover {
          background-color: ${theme.palette.tertiary.main};
          border-color: ${theme.palette.tertiary.main};
          color: ${theme.palette.tertiary.contrast};
        }
        .negative {
          background-color: ${theme.palette.negative.main};
          border-color: ${theme.palette.negative.main};
          color: ${theme.palette.negative.contrast};
        }
        .negative.clickable:hover,
        .negative.focusVisible,
        .negative.hover:hover {
          border-color: ${theme.palette.negative.main};
          color: ${theme.palette.negative.main};
        }
        .negative.outlined {
          border-color: ${theme.palette.negative.main};
          color: ${theme.palette.negative.main};
        }
        .negative.outlined.clickable:hover,
        .negative.outlined.focusVisible,
        .negative.outlined.hover:hover {
          background-color: ${theme.palette.negative.main};
          border-color: ${theme.palette.negative.main};
          color: ${theme.palette.negative.contrast};
        }
        .warning {
          background-color: ${theme.palette.warning.main};
          border-color: ${theme.palette.warning.main};
          color: ${theme.palette.warning.contrast};
        }
        .warning.clickable:hover,
        .warning.focusVisible,
        .warning.hover:hover {
          border-color: ${theme.palette.warning.main};
          color: ${theme.palette.warning.main};
        }
        .warning.outlined {
          border-color: ${theme.palette.warning.main};
          color: ${theme.palette.warning.main};
        }
        .warning.outlined.clickable:hover,
        .warning.outlined.focusVisible,
        .warning.outlined.hover:hover {
          background-color: ${theme.palette.warning.main};
          border-color: ${theme.palette.warning.main};
          color: ${theme.palette.warning.contrast};
        }
        .positive {
          background-color: ${theme.palette.positive.main};
          border-color: ${theme.palette.positive.main};
          color: ${theme.palette.positive.contrast};
        }
        .positive.clickable:hover,
        .positive.focusVisible,
        .positive.hover:hover {
          border-color: ${theme.palette.positive.main};
          color: ${theme.palette.positive.main};
        }
        .positive.outlined {
          border-color: ${theme.palette.positive.main};
          color: ${theme.palette.positive.main};
        }
        .positive.outlined.clickable:hover,
        .positive.outlined.focusVisible,
        .positive.outlined.hover:hover {
          background-color: ${theme.palette.positive.main};
          border-color: ${theme.palette.positive.main};
          color: ${theme.palette.positive.contrast};
        }
        .grey600 {
          background-color: ${theme.palette.grey[600]};
          border-color: ${theme.palette.grey[600]};
          color: ${theme.palette.common.white};
        }
        .grey600.clickable:hover,
        .grey600.focusVisible,
        .grey600.hover:hover {
          border-color: ${theme.palette.grey[600]};
          color: ${theme.palette.grey[600]};
        }
        .grey600.outlined {
          border-color: ${theme.palette.grey[600]};
          color: ${theme.palette.grey[600]};
        }
        .grey600.outlined.clickable:hover,
        .grey600.outlined.focusVisible,
        .grey600.outlined.hover:hover {
          background-color: ${theme.palette.grey[600]};
          border-color: ${theme.palette.grey[600]};
          color: ${theme.palette.common.white};
        }
        .greyA400 {
          background-color: ${theme.palette.grey.A400};
          border-color: ${theme.palette.grey.A400};
          color: ${theme.palette.common.white};
        }
        .greyA400.clickable:hover,
        .greyA400.focusVisible,
        .greyA400.hover:hover {
          border-color: ${theme.palette.grey.A400};
          color: ${theme.palette.grey.A400};
        }
        .greyA400.outlined {
          border-color: ${theme.palette.grey.A400};
          color: ${theme.palette.grey.A400};
        }
        .greyA400.outlined.clickable:hover,
        .greyA400.outlined.focusVisible,
        .greyA400.outlined.hover:hover {
          background-color: ${theme.palette.grey.A400};
          border-color: ${theme.palette.grey.A400};
          color: ${theme.palette.common.white};
        }
        .outlined {
          background-color: transparent;
          border: 1px solid ${theme.palette.grey[300]};
          color: ${theme.palette.text.hint};
        }
        .outlined.default.clickable:hover,
        .outlined.default.focusVisible,
        .outlined.default.hover:hover {
          background-color: ${theme.palette.grey[300]};
          border-color: ${theme.palette.grey[300]};
          color: ${theme.palette.text.secondary};
        }
      `}</style>
    </React.Fragment>
  );
};

Chip.displayName = "Chip";

Chip.propTypes = {
  /**
   * The elements to render inside the pill.
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
    "grey600",
    "greyA400",
    "primary",
    "secondary",
    "tertiary",
    "positive",
    "warning",
    "negative"
  ]),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the chip should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * Whether the chip should invert its variant on hover.
   */
  hover: PropTypes.bool,

  /**
   * Icon to display at start of chip.
   */
  icon: PropTypes.node,

  /**
   * The content of the label.
   */
  label: PropTypes.node,

  /**
   * Action to perform when clicked.
   */
  onClick: PropTypes.func,

  /**
   * The size of the chip.
   */
  size: PropTypes.oneOf(["medium", "small", "xsmall"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["default", "outlined"])
};

Chip.defaultProps = {
  classes: [],
  color: "default",
  component: "div",
  disabled: false,
  hover: false,
  size: "medium",
  variant: "default"
};

export default withThemeContext(withClasses(Chip));

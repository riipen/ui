import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Chip extends React.Component {
  static propTypes = {
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
      "dark",
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
     * Icon to display at start of chip.
     */
    icon: PropTypes.elementType,

    /**
     * The content of the label.
     */
    label: PropTypes.node,

    /**
     * Action to perform when clicked.
     */
    onClick: PropTypes.func,

    /**
     * Callback function fired when the icon is clicked.
     */
    onIconClick: PropTypes.func,

    /**
     * The size of the chip.
     */
    size: PropTypes.oneOf(["small", "medium"]),

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(["default", "outlined"])
  };

  static defaultProps = {
    classes: [],
    color: "default",
    component: "div",
    disabled: false,
    size: "medium",
    variant: "default"
  };

  static contextType = ThemeContext;

  render() {
    const {
      classes,
      color,
      component: Component,
      disabled,
      icon: Icon,
      onIconClick,
      onClick,
      size,
      variant
    } = this.props;

    const label = this.props.label || this.props.children;

    const theme = this.context;

    const clickable = !!onClick;
    const iconClickable = !!onIconClick;

    const className = clsx(
      "root",
      color,
      disabled ? "disabled" : null,
      size,
      variant,
      classes,
      { clickable }
    );

    const handleClick = () => {
      if (onClick) onClick();
    };

    return (
      <React.Fragment>
        <Component onClick={handleClick} className={className}>
          {Icon && (
            <span
              onClick={onIconClick}
              className={clsx("icon", "icon-start", {
                iconClickable
              })}
            >
              <Icon />
            </span>
          )}
          <span className={clsx("label")}>{label}</span>
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
            font-size: 13px;
            justify-content: center;
            outline: 0;
            vertical-align: middle;
            white-space: nowrap;
          }
          .root.small {
            padding: 5px 10px;
          }
          .root.medium {
            padding: 10px 15px;
          }
          .root.disabled {
            background-color: ${theme.palette.disabled};
            border: 1px solid;
            border-color: ${theme.palette.disabled};
            color: ${theme.palette.common.white};
            pointer-events: none;
          }
          .root.clickable {
            cursor: pointer;
          }

          .icon-start {
            align-items: center;
            display: flex;
            padding-right: 10px;
            white-space: nowrap;
          }

          .icon-start.disabled {
            cursor: initial;
          }

          .icon-start.iconClickable {
            cursor: pointer;
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
          .primary.outlined {
            border-color: ${theme.palette.primary.main};
            color: ${theme.palette.primary.main};
          }
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
          .secondary.outlined {
            border-color: ${theme.palette.secondary.main};
            color: ${theme.palette.secondary.main};
          }
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
          .tertiary.outlined {
            border-color: ${theme.palette.tertiary.main};
            color: ${theme.palette.tertiary.main};
          }

          .negative {
            background-color: ${theme.palette.negative.main};
            border-color: ${theme.palette.negative.main};
            color: ${theme.palette.negative.contrast};
          }
          .negative.outlined {
            border-color: ${theme.palette.negative.main};
            color: ${theme.palette.negative.main};
          }

          .warning {
            background-color: ${theme.palette.warning.main};
            border-color: ${theme.palette.warning.main};
            color: ${theme.palette.warning.contrast};
          }
          .warning.outlined {
            border-color: ${theme.palette.warning.main};
            color: ${theme.palette.warning.main};
          }

          .positive {
            background-color: ${theme.palette.positive.main};
            border-color: ${theme.palette.positive.main};
            color: ${theme.palette.positive.contrast};
          }
          .positive.outlined {
            border-color: ${theme.palette.positive.main};
            color: ${theme.palette.positive.main};
          }

          .dark {
            background-color: ${theme.palette.grey.A400};
            border-color: ${theme.palette.grey.A400};
            color: ${theme.palette.common.white};
          }
          .dark.outlined {
            border-color: ${theme.palette.grey.A400};
            color: ${theme.palette.grey.A400};
          }

          .outlined {
            background-color: transparent;
            border: 1px solid ${theme.palette.text.primary};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Chip);

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Chip extends React.Component {
  static propTypes = {
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
     * The elements to render inside the pill
     */
    children: PropTypes.node,

    /**
     * If `true`, the chip should be displayed in a disabled state.
     */
    disabled: PropTypes.bool,

    /**
     * Whether to invert colors on hover
     */
    hover: PropTypes.bool,

    /**
     * Icon to display at start of chip
     */
    iconStart: PropTypes.elementType,

    /**
     * The content of the label.
     */
    label: PropTypes.node,

    /**
     * Action to perform when clicked
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
     *
     */
    spacing: PropTypes.number,

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
    spacing: 1,
    variant: "default"
  };

  static contextType = ThemeContext;

  render() {
    const {
      classes,
      color,
      component: Component,
      disabled,
      hover,
      iconStart: IconStart,
      onIconClick,
      onClick,
      spacing,
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
      { hover },
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
          {IconStart && (
            <span
              onClick={onIconClick}
              className={clsx("icon", "icon-start", {
                iconClickable
              })}
            >
              <IconStart />
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
            ${spacing !== 0 && `margin-bottom: ${theme.spacing(spacing)}px;`}
            ${spacing !== 0 &&
              `margin-right: ${theme.spacing(
                spacing
              )}px;`}
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

          .hover:hover {
            background-color: transparent;
            border: 1px solid ${theme.palette.text.primary};
          }
          .outlined.hover:hover {
            color: ${theme.palette.text.secondary};
            background-color: ${theme.palette.grey[300]};
            border: 1px solid transparent;
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
          .primary.hover:hover {
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
          .secondary.hover:hover {
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
          .tertiary.hover:hover {
            border-color: ${theme.palette.tertiary.main};
            color: ${theme.palette.tertiary.main};
          }
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
          .negative.outlined {
            border-color: ${theme.palette.negative.main};
            color: ${theme.palette.negative.main};
          }
          .negative.hover:hover {
            border-color: ${theme.palette.negative.main};
            color: ${theme.palette.negative.main};
          }
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
          .warning.outlined {
            border-color: ${theme.palette.warning.main};
            color: ${theme.palette.warning.main};
          }
          .warning.hover:hover {
            border-color: ${theme.palette.warning.main};
            color: ${theme.palette.warning.main};
          }
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
          .positive.outlined {
            border-color: ${theme.palette.positive.main};
            color: ${theme.palette.positive.main};
          }
          .positive.hover:hover {
            border-color: ${theme.palette.positive.main};
            color: ${theme.palette.positive.main};
          }
          .positive.outlined.hover:hover {
            background-color: ${theme.palette.positive.main};
            border-color: ${theme.palette.positive.main};
            color: ${theme.palette.positive.contrast};
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

export default Chip;

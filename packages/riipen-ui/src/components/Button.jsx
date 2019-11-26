import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Button extends React.Component {
  static propTypes = {
    /**
     * The content of the button.
     */
    children: PropTypes.node.isRequired,

    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array,

    /**
     * The color to use.
     */
    color: PropTypes.oneOf(["default", "primary", "secondary", "tertiary"]),

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
    iconEnd: PropTypes.elementType,

    /**
     * Element placed before the children.
     */
    iconStart: PropTypes.elementType,

    /**
     * The size of the chip.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * The type of button, determining functionality.
     */
    type: PropTypes.oneOf(["button", "reset", "submit"]),

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(["text", "outlined", "contained"])
  };

  static defaultProps = {
    classes: [],
    color: "default",
    disabled: false,
    fullWidth: false,
    size: "medium",
    type: "button",
    variant: "text"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      color,
      disabled,
      fullWidth,
      iconEnd: IconEnd,
      iconStart: IconStart,
      size,
      type,
      variant,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx(
      "root",
      disabled ? "disabled" : null,
      fullWidth ? "full-width" : null,
      size,
      variant,
      variant === "contained" ? `contained-${color}` : null,
      variant === "text" ? `text-${color}` : null,
      variant === "outlined" ? `outlined-${color}` : null,
      classes
    );

    const Component = other.href ? "a" : "button";

    return (
      <React.Fragment>
        <Component
          className={className}
          disabled={disabled}
          type={type}
          {...other}
        >
          <span className={clsx("label")}>
            {IconStart && (
              <span className={clsx("icon-start")}>
                <IconStart />
              </span>
            )}
            {children}
            {IconEnd && (
              <span className={clsx("icon-end")}>
                <IconEnd />
              </span>
            )}
          </span>
        </Component>
        <style jsx>{`
          .root {
            background-color: ${theme.palette.grey[300]};
            border-radius: ${theme.shape.borderRadius.md};
            border-style: solid;
            border-width: 1px;
            color: ${theme.palette.text.primary};
            cursor: pointer;
            display: inline-flex;
            margin: 0;
            min-width: 130px;
            padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
            outline: 0;
            transition: all ${theme.transitions.duration.standard}ms;
            user-select: none;
          }
          .root:active,
          .root:focus,
          .root:hover {
            background-color: ${theme.palette.grey[400]};
          }

          a.root {
            border: none;
            min-width: 100px;
            text-decoration: none;
          }

          .icon-start {
            margin-right: 8px;
          }
          .icon-end {
            margin-left: 8px;
          }
          .icon-start > svg,
          .icon-end > svg {
            display: flex;
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

          .outlined {
            background-color: transparent;
            border: 1px solid rgba(0, 0, 0, 0.23);
            color: ${theme.palette.text.primary};
            overflow: hidden;
            position: relative;
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
            border-color: ${theme.palette.primary.main};
            color: ${theme.palette.primary.main};
          }
          .outlined-primary:hover::before {
            background-color: ${theme.palette.primary.main};
          }
          .outlined-secondary {
            border-color: ${theme.palette.secondary.main};
            color: ${theme.palette.secondary.main};
          }
          .outlined-secondary:hover::before {
            background-color: ${theme.palette.secondary.main};
          }
          .outlined-tertiary {
            border-color: ${theme.palette.tertiary.main};
            color: ${theme.palette.tertiary.main};
          }
          .outlined-tertiary:hover::before {
            background-color: ${theme.palette.tertiary.main};
          }

          .label {
            align-items: center;
            display: flex;
            font-family: ${theme.typography.fontFamily};
            font-size: 13px;
            font-weight: ${theme.typography.fontWeight.medium};
            justify-content: center;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
            width: 100%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Button;

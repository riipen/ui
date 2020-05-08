import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class ButtonIcon extends React.Component {
  static propTypes = {
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
      "muted",
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
     * If `true`, the button will have an outline. If `false` the button will not have an outline when focussed.
     */
    outline: PropTypes.bool,

    /**
     * The size of the chip.
     */
    size: PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    classes: [],
    color: "default",
    disabled: false,
    outline: false,
    size: "medium"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      color,
      component,
      disabled,
      outline,
      size,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx(
      "root",
      color,
      disabled ? "disabled" : null,
      size,
      classes
    );

    let Component = other.href ? "a" : "button";

    if (component) Component = component;

    return (
      <React.Fragment>
        <Component className={className} disabled={disabled} {...other}>
          <span className={clsx("label", `icon-${size}`, `font-${size}`)}>
            {children}
          </span>
        </Component>
        <style jsx>{`
          .root {
            background-color: transparent;
            border: 0;
            color: ${theme.palette.text.secondary};
            cursor: pointer;
            display: inline-flex;
            padding: ${theme.spacing(2)}px;
            position: relative;
            ${outline ? "" : "outline: 0;"}
            transition: all ${theme.transitions.duration.standard}ms;
            user-select: none;
          }
          .root:active,
          .root:focus,
          .root:hover {
            background-color: transparent;
            color: ${theme.palette.secondary.main};
          }
          .root:hover::before {
            background-color: ${theme.palette.secondary.main};
            border-radius: 50%;
            bottom: 0;
            content: "";
            left: 0;
            opacity: 0.1;
            position: absolute;
            right: 0;
            top: 0;
          }

          a.root {
            border: none;
            text-decoration: none;
          }

          .muted:hover {
            color: ${theme.palette.text.primary};
          }

          .muted:hover::before {
            background-color: ${theme.palette.grey[600]};
          }

          .primary,
          .primary:hover {
            color: ${theme.palette.primary.main};
          }

          .primary:hover::before {
            background-color: ${theme.palette.primary.main};
          }
          .secondary,
          .secondary:hover {
            color: ${theme.palette.secondary.main};
          }
          .secondary:hover::before {
            background-color: ${theme.palette.secondary.main};
          }
          .tertiary,
          .tertiary:hover {
            color: ${theme.palette.tertiary.main};
          }
          .tertiary:hover::before {
            background-color: ${theme.palette.tertiary.main};
          }
          .white,
          .white:hover {
            color: ${theme.palette.common.white};
          }
          .white:hover::before {
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
      </React.Fragment>
    );
  }
}

export default withClasses(ButtonIcon);

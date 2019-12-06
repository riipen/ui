import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Button extends React.Component {
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
    color: PropTypes.oneOf(["default", "primary", "secondary", "tertiary"]),

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
    size: PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    classes: [],
    color: "default",
    disabled: false,
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
          <span className={clsx("label", `font-${size}`)}>{children}</span>
        </Component>
        <style jsx>{`
          .root {
            background-color: transparent;
            border: 0;
            color: ${theme.palette.text.primary};
            cursor: pointer;
            display: inline-flex;
            padding: ${theme.spacing(2)}px;
            position: relative;
            outline: 0;
            transition: all ${theme.transitions.duration.standard}ms;
            user-select: none;
          }
          .root:active,
          .root:focus,
          .root:hover {
            background-color: transparent;
          }
          .root:hover::before {
            background-color: ${theme.palette.grey[600]};
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

          .primary {
            color: ${theme.palette.primary.main};
          }
          .primary:hover::before {
            background-color: ${theme.palette.primary.main};
          }
          .secondary {
            color: ${theme.palette.secondary.main};
          }
          .secondary:hover::before {
            background-color: ${theme.palette.secondary.main};
          }
          .tertiary {
            color: ${theme.palette.tertiary.main};
          }
          .tertiary:hover::before {
            background-color: ${theme.palette.tertiary.main};
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

export default Button;

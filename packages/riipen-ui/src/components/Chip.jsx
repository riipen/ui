import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
    color: PropTypes.oneOf(["default", "primary", "secondary", "tertiary"]),

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
     * The content of the label.
     */
    label: PropTypes.node,

    /**
     * Callback function fired when the delete icon is clicked.
     * If set, the delete icon will be shown.
     */
    onDelete: PropTypes.func,

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
      label,
      onDelete,
      size,
      variant
    } = this.props;

    const theme = this.context;

    const className = clsx(
      "root",
      color,
      disabled ? "disabled" : null,
      size,
      variant,
      classes
    );

    return (
      <React.Fragment>
        <Component className={className}>
          <span className={clsx("label")}>{label}</span>
          {onDelete && (
            <span className={clsx("delete", `delete-${color}`)}>
              <FontAwesomeIcon fixedWidth icon={faTimes} onClick={onDelete} />
            </span>
          )}
        </Component>
        <style jsx>{`
          .root {
            align-items: center;
            background-color: ${theme.palette.grey[300]};
            border-radius: 16px;
            border: none;
            box-sizing: border-box;
            display: inline-flex;
            font-family: ${theme.typography.fontFamily};
            font-size: 13px;
            height: 32px;
            justify-content: center;
            outline: 0;
            padding: 0;
            vertical-align: middle;
            white-space: nowrap;
          }

          .disabled {
            opacity: 0.5;
            pointer-events: none;
          }

          .label {
            align-items: center;
            display: flex;
            padding-left: 12px;
            padding-right: 12px;
            white-space: nowrap;
          }

          .delete {
            align-items: center;
            background-color: ${theme.palette.grey[400]};
            border-radius: 50%;
            color: ${theme.palette.common.white};
            display: flex;
            height: 20px;
            justify-content: center;
            margin-right: 12px;
            width: 20px;
          }
          .delete:hover {
            background-color: ${theme.palette.grey[500]};
            cursor: pointer;
          }

          .small {
            height: 24px;
          }

          .primary {
            background-color: ${theme.palette.primary.main};
            border-color: ${theme.palette.primary.main};
            color: ${theme.palette.primary.contrast};
          }
          .secondary {
            background-color: ${theme.palette.secondary.main};
            border-color: ${theme.palette.secondary.main};
            color: ${theme.palette.secondary.contrast};
          }
          .tertiary {
            background-color: ${theme.palette.tertiary.main};
            border-color: ${theme.palette.tertiary.main};
            color: ${theme.palette.tertiary.contrast};
          }

          .outlined {
            background-color: transparent;
            border: 1px solid ${theme.palette.grey[300]};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Chip;

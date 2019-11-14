import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Tab extends React.Component {
  static propTypes = {
    /**
     * If `true`, the tab indicator will be displayed.
     */
    active: PropTypes.bool,

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
     * If `true`, will make the tab grow to use all the available space,
     */
    fullWidth: PropTypes.bool,

    /**
     * The icon element.
     */
    icon: PropTypes.elementType,

    /**
     * The label element.
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
     * The value provided when a click event is dispatched.
     */
    value: PropTypes.any.isRequired
  };

  static defaultProps = {
    active: false,
    color: "primary",
    disabled: false,
    fullWidth: false,
    orientation: "horizontal"
  };

  static contextType = ThemeContext;

  handleClick = e => {
    const { onClick, value } = this.props;

    return onClick(e, value);
  };

  render() {
    const {
      active,
      classes,
      color,
      disabled,
      fullWidth,
      icon: Icon,
      label,
      orientation
    } = this.props;

    const theme = this.context;

    const className = clsx(
      "root",
      active ? color : null,
      disabled ? "disabled" : null,
      fullWidth ? "full-width" : null,
      orientation,
      classes
    );

    return (
      <React.Fragment>
        <div className={className} onClick={this.handleClick}>
          {Icon && (
            <div className={clsx("icon")}>
              <Icon size="20px" />
            </div>
          )}
          {label && <div className={clsx("label")}>{label}</div>}
        </div>
        <style jsx>{`
          .root {
            border-bottom: 3px solid transparent;
            cursor: pointer;
            display: inline-block;
            height: 100%;
            min-width: 72px;
            padding: ${theme.spacing(5)}px ${theme.spacing(6)}px;
            text-align: center;
            transition: all ${theme.transitions.duration.standard}ms;
          }

          .icon {
            align-items: center;
            display: flex;
            font-size: 20px;
            justify-content: center;
            margin-bottom: ${theme.spacing(1)};
            text-align: center;
            width: 100%;
          }
          .icon + * {
            margin-top: ${theme.spacing(2)}px;
          }

          .label {
            font-family: ${theme.typography.fontFamily};
            font-size: 14px;
            font-weight: ${theme.typography.fontWeight.medium};
            letter-spacing: 1px;
            text-decoration: none;
            text-transform: uppercase;
            width: 100%;
          }

          .vertical {
            border-bottom: 0;
            border-right: 3px solid transparent;
            padding: ${theme.spacing(4)}px ${theme.spacing(4)}px;
            text-align: left;
          }

          .primary {
            border-color: ${theme.palette.primary.main};
            color: ${theme.palette.primary.main};
          }
          .secondary {
            border-color: ${theme.palette.secondary.main};
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
        `}</style>
      </React.Fragment>
    );
  }
}

export default Tab;

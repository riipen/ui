import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
    color: "secondary",
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
      active ? `${color}-active` : null,
      active ? `${orientation}-active` : null,
      color,
      disabled ? "disabled" : null,
      fullWidth ? "full-width" : null,
      orientation,
      classes
    );

    return (
      <React.Fragment>
        <div className={className} onClick={this.handleClick}>
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
            padding: ${theme.spacing(3)}px ${theme.spacing(6)}px;
            text-align: center;
            transition: all ${theme.transitions.duration.standard}ms;
          }

          .icon + * {
            margin-left: ${theme.spacing(2)}px;
          }

          .icon {
            margin-bottom: 1px;
          }

          .label {
            font-family: ${theme.typography.fontFamily};
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
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses()(Tab);

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class ListItem extends React.Component {
  static propTypes = {
    /**
     * The content of the list item.
     */
    children: PropTypes.any,

    /**
     * Array or string of additional CSS classes to use.
     *
     * @type {string | Array}
     */
    classes: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

    /**
     * Whether the list item can be selected
     */
    disabled: PropTypes.bool,

    /**
     * Whether the list item is currently selected
     */
    selected: PropTypes.bool,

    /**
     * Callback for when the list item is clicked
     */
    onClick: PropTypes.func,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"])
  };

  static defaultProps = {
    color: "primary"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      onClick,
      disabled,
      selected,
      color
    } = this.props;

    const className = clsx(classes, color, "list-item", {
      disabled,
      selected
    });

    const theme = this.context;

    const handleClick = event => {
      if (onClick && !disabled) onClick(event);
    };

    return (
      <React.Fragment>
        <div onClick={handleClick} className={className}>
          {children}
        </div>
        <style jsx>{`
          .list-item {
            padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
            color: ${theme.palette.text.secondary};
            font-family: ${theme.typography.body1.fontFamily};
            font-size: ${theme.typography.body1.fontSize};
            font-weight: ${theme.typography.body1.fontWeight};
            line-height: ${theme.typography.body1.lineHeight};
            letter-spacing: ${theme.typography.body1.letterSpacing};
            outline: 0;
            border: none;
            text-align: inherit;
            border-left: 5px solid transparent;
            margin: 0;
            box-sizing: border-box;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default ListItem;

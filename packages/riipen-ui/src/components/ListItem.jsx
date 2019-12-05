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
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * Callback for when the list item is clicked
     */
    onClick: PropTypes.func
  };

  static defaultProps = {
    color: "primary",
    classes: []
  };

  static contextType = ThemeContext;

  handleClick = event => {
    const { onClick } = this.props;
    if (onClick) onClick(event);
  };

  render() {
    const { children, classes, color } = this.props;

    const className = clsx(classes, color, "list-item");

    const theme = this.context;

    return (
      <React.Fragment>
        <div onClick={this.handleClick} className={className}>
          {children}
        </div>
        <style jsx>{`
          .list-item {
            border: none;
            border-left: 5px solid transparent;
            box-sizing: border-box;
            color: ${theme.palette.text.secondary};
            font-family: ${theme.typography.body1.fontFamily};
            font-size: ${theme.typography.body1.fontSize};
            font-weight: ${theme.typography.body1.fontWeight};
            letter-spacing: ${theme.typography.body1.letterSpacing};
            line-height: ${theme.typography.body1.lineHeight};
            outline: 0;
            padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
            text-align: inherit;
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default ListItem;

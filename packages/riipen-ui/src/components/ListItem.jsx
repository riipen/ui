import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
     * function to call when the list item is selected.
     */
    onClick: PropTypes.func
  };

  static defaultProps = {
    color: "primary",
    classes: []
  };

  static contextType = ThemeContext;

  handleChange = e => {
    const { onClick } = this.props;
    if (!onClick) {
      return;
    }

    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onClick(e);
    }

    return;
  };

  render() {
    const { children, classes, color, onClick, ...other } = this.props;

    const className = clsx(classes, color, "list-item");

    const theme = this.context;

    return (
      <React.Fragment>
        <div
          tabIndex="0"
          role={onClick ? "button" : ""}
          className={className}
          onKeyDown={this.handleChange}
          onClick={this.handleChange}
          {...other}
        >
          {children}
        </div>
        <style jsx>{`
          .list-item {
            border: none;
            box-sizing: border-box;
            margin: 0;
            outline: 0;
            padding: ${theme.spacing(2)}px 0;
          }
          .list-item:focus {
            color: ${theme.palette[color].main};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(ListItem);

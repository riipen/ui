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
    color: PropTypes.oneOf(["primary", "secondary"])
  };

  static defaultProps = {
    color: "primary",
    classes: []
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, color, ...other } = this.props;

    const className = clsx(classes, color, "list-item");

    const theme = this.context;

    return (
      <React.Fragment>
        <div className={className} {...other}>
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
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(ListItem);

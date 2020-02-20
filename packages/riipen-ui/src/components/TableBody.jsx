import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class TableBody extends React.Component {
  static propTypes = {
    /**
     * Children to render in the tbody element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string)
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes } = this.props;
    return (
      <React.Fragment>
        <tbody classes={clsx(classes)}>{children}</tbody>
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

export default TableBody;

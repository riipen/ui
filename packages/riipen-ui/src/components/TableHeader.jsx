import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class TableHeader extends React.Component {
  static propTypes = {
    /**
     * Children to render in the thead element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {};

  static contextType = ThemeContext;

  render() {
    const { children, classes } = this.props;
    return (
      <React.Fragment>
        <thead className={clsx(classes)}>{children}</thead>
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

export default TableHeader;

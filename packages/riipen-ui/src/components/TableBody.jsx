import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import withClasses from "../utils/withClasses";

class TableBody extends React.Component {
  static displayName = "TableBody";

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

  render() {
    const { children, classes, ...other } = this.props;
    return (
      <tbody classes={clsx(classes)} {...other}>
        {children}
      </tbody>
    );
  }
}

export default withClasses(TableBody);

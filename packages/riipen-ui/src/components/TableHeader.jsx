import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import withClasses from "../utils/withClasses";

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

  render() {
    const { children, classes, ...other } = this.props;
    return (
      <thead className={clsx(classes)} {...other}>
        {children}
      </thead>
    );
  }
}

export default withClasses(TableHeader);

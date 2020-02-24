import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

class TableHeaderCell extends React.Component {
  static propTypes = {
    /**
     * Alignment property to apply to the th element
     */
    align: PropTypes.oneOf(["center", "left", "right", "justify", "char"]),

    /**
     * Children to render in the th element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    align: "left"
  };

  render() {
    const { align, children, classes } = this.props;
    return (
      <React.Fragment>
        <th align={align} className={clsx(classes)}>
          {children}
        </th>
      </React.Fragment>
    );
  }
}

export default TableHeaderCell;

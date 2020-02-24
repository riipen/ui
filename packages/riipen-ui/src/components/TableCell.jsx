import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

class TableCell extends React.Component {
  static propTypes = {
    /**
     * Alignment property to apply to the td element
     */
    align: PropTypes.oneOf(["center", "left", "right", "justify", "char"]),

    /**
     * Children to render in the td element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the td element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * Number of columns the td element should span
     */
    colSpan: PropTypes.number,

    /**
     * Number of rows the td element should span
     */
    rowSpan: PropTypes.number
  };

  static defaultProps = {
    align: "left",
    colSpan: 1,
    rowSpan: 1
  };

  render() {
    const { children, classes, colSpan, rowSpan, align } = this.props;

    return (
      <React.Fragment>
        <td
          className={clsx(classes)}
          align={align}
          colSpan={colSpan}
          rowSpan={rowSpan}
        >
          {children}
        </td>
      </React.Fragment>
    );
  }
}

export default TableCell;

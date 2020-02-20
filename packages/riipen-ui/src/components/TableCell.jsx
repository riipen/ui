import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class TableCell extends React.Component {
  static propTypes = {
    /**
     * Children to render in the td element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the td element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * Padding to apply to the td element
     */
    spacing: PropTypes.number,

    /**
     * Alignment property to apply to the td element
     */
    align: PropTypes.oneOf(["center", "left", "right", "justify", "char"]),

    /**
     * Number of columns the td element should span
     */
    span: PropTypes.number
  };

  static defaultProps = {
    span: 1,
    align: "left",
    spacing: 3
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, spacing, span, align } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <td className={clsx(classes)} align={align} colSpan={span}>
          {children}
        </td>
        <style jsx>{`
          td {
            max-width: 400px;
            ${spacing ? `padding: ${theme.spacing(spacing)}px;` : ""}
            vertical-align: middle;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default TableCell;

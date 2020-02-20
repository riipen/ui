import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class TableRow extends React.Component {
  static propTypes = {
    /**
     * Children to render in the tr element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The number of columns the row should span
     */
    span: PropTypes.number,

    /**
     * Whether to highlight the row on hover
     */
    hover: PropTypes.bool,

    /**
     * Whether to render the border for the row
     */
    border: PropTypes.bool
  };

  static defaultProps = {
    span: 1,
    border: true
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, span, hover, border } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <tr className={clsx(classes)} rowSpan={span}>
          {children}
        </tr>
        <style jsx>{`
          tr {
            ${border
              ? `background: linear-gradient(
                to bottom,
                transparent calc(100% - 1px),
                ${theme.palette.grey[400]} 0%,
                ${theme.palette.grey[400]}
              )
              bottom / calc(100% - ${theme.spacing(8)}px);`
              : ""}
            border-left: 3px solid transparent;
          }

          tr:hover {
            ${hover ? `background-color: ${theme.palette.common.white};` : ""}
            ${hover
              ? `border-left: 3px solid ${theme.palette.secondary.main};`
              : ""}
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default TableRow;

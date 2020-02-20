import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class TableContainer extends React.Component {
  static propTypes = {
    /**
     * Children to render in the table element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * Whether to give all columns in the table equal width
     */
    fixed: PropTypes.bool,

    /**
     * Whether to center the table in the parent container
     */
    centered: PropTypes.bool,

    /**
     * Whether to render the background for a table
     */
    background: PropTypes.bool,

    /**
     * The padding to add to the table element
     */
    spacing: PropTypes.number
  };

  static defaultProps = {
    background: true
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      fixed,
      spacing,
      centered,
      background
    } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <table className={clsx(classes)} border="0">
          {children}
        </table>
        <style jsx>{`
          table {
            ${background
              ? `background-color: ${theme.palette.grey[100]}`
              : "background-color: transparent"};
            border-radius: 4px;
            border-collapse: collapse;
            ${spacing ? `padding: ${theme.spacing(spacing)}px` : ""}
            ${centered ? "margin: auto" : "width: 100%"};
            ${fixed ? "table-layout: fixed;" : ""}
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default TableContainer;

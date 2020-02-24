import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Table extends React.Component {
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
    layout: PropTypes.oneOf(["auto", "fixed"]),

    /**
     * Whether to center the table in the parent container
     */
    centered: PropTypes.bool,

    /**
     * Whether to render the background for a table
     */
    background: PropTypes.oneOf([
      "grey50",
      "grey100",
      "grey200",
      "grey300",
      "grey400"
    ])
  };

  static defaultProps = {
    background: "grey100",
    layout: "auto"
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, layout, centered, background } = this.props;

    const theme = this.context;

    const tableBackground = {
      grey50: theme.palette.grey[50],
      grey100: theme.palette.grey[100],
      grey200: theme.palette.grey[200],
      grey300: theme.palette.grey[300],
      grey400: theme.palette.grey[400]
    };

    return (
      <React.Fragment>
        <table className={clsx(classes)} border="0">
          {children}
        </table>
        <style jsx>{`
          table {
            ${tableBackground[background]
              ? `background-color: ${tableBackground[background]}`
              : "background-color: transparent"};
            border-radius: 4px;
            border-collapse: collapse;
            ${centered ? "margin: auto" : "width: 100%"};
            table-layout: ${layout};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Table;

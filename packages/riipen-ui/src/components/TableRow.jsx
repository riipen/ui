import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
     * Whether to highlight the row on hover
     */
    hover: PropTypes.bool,

    /**
     * Whether to render the border for the row
     */
    border: PropTypes.bool
  };

  static defaultProps = {
    border: true
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, hover, border } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <tr className={clsx(classes)}>{children}</tr>
        <style jsx>{`
          tr {
            border-bottom: 1px solid
              ${border &&
                (theme.palette.divider
                  ? theme.palette.divider
                  : `transparent`)};
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

export default withClasses()(TableRow);

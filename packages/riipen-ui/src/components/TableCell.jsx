import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class TableCell extends React.Component {
  static displayName = "TableCell";

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
     * The amount of padding the cell should have.
     */
    padding: PropTypes.number,

    /**
     * Number of rows the td element should span
     */
    rowSpan: PropTypes.number
  };

  static defaultProps = {
    align: "left",
    colSpan: 1,
    padding: 3,
    rowSpan: 1
  };

  static contextType = ThemeContext;

  render() {
    const {
      align,
      children,
      classes,
      colSpan,
      padding,
      rowSpan,
      ...other
    } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <td
          className={clsx(classes)}
          align={align}
          colSpan={colSpan}
          rowSpan={rowSpan}
          {...other}
        >
          {children}
        </td>
        <style jsx>{`
          td {
            font-family: ${theme.typography.body2.fontFamily};
            font-size: ${theme.typography.body2.fontSize};
            font-weight: ${theme.typography.body2.fontWeight};
            letter-spacing: ${theme.typography.body2.letterSpacing};
            line-height: ${theme.typography.body2.lineHeight};
            padding: ${theme.spacing(padding)}px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(TableCell);

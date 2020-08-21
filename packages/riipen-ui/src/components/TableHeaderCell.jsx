import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class TableHeaderCell extends React.Component {
  static displayName = "TableHeaderCell";

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

  static contextType = ThemeContext;

  render() {
    const { align, children, classes, ...other } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <th align={align} className={clsx(classes)} {...other}>
          {children}
        </th>
        <style jsx>{`
          th {
            font-family: ${theme.typography.body1.fontFamily};
            font-size: ${theme.typography.body1.fontSize};
            font-weight: ${theme.typography.body1.fontWeight};
            letter-spacing: ${theme.typography.body1.letterSpacing};
            line-height: ${theme.typography.body1.lineHeight};
            padding: ${theme.spacing(3)}px;
            text-align: left;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(TableHeaderCell);

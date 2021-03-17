import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class TableHeaderCell extends React.Component {
  static displayName = "TableHeaderCell";

  static propTypes = {
    /**
     * Children to render in the th element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * Alignment of the text in the header.
     */
    textAlign: PropTypes.oneOf(["center", "left", "right", "justify"])
  };

  static defaultProps = {
    textAlign: "left"
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, textAlign, ...other } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <th className={clsx(classes)} {...other}>
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
            text-align: ${textAlign};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(TableHeaderCell);

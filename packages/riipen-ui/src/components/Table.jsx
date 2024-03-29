import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";
import withForwardedRef from "../utils/withForwardedRef";

class Table extends React.Component {
  static displayName = "Table";

  static propTypes = {
    /**
     * What background to render for the table.
     * Defaults to grey50.
     */
    backgroundColor: PropTypes.oneOf([
      "transparent",
      "grey50",
      "grey100",
      "grey200",
      "grey300",
      "grey400"
    ]),

    /**
     * Children to render in the table element.
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element.
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * A reference to the table DOM element.
     */
    forwardedRef: PropTypes.element,

    /**
     * Whether to give all columns in the table equal width.
     */
    layout: PropTypes.oneOf(["auto", "fixed"])
  };

  static defaultProps = {
    backgroundColor: "grey50",
    layout: "auto"
  };

  static contextType = ThemeContext;

  render() {
    const {
      backgroundColor,
      children,
      classes,
      forwardedRef,
      layout,
      ...other
    } = this.props;

    const theme = this.context;

    const tableBackground = {
      transparent: "transparent",
      grey50: theme.palette.grey[50],
      grey100: theme.palette.grey[100],
      grey200: theme.palette.grey[200],
      grey300: theme.palette.grey[300],
      grey400: theme.palette.grey[400]
    };

    return (
      <>
        <table
          ref={forwardedRef}
          className={clsx(classes)}
          border="0"
          {...other}
        >
          {children}
        </table>
        <style jsx>{`
          table {
            background-color: ${tableBackground[backgroundColor]};
            border-radius: 4px;
            border-collapse: collapse;
            table-layout: ${layout};
            width: 100%;
          }
        `}</style>
      </>
    );
  }
}

export default withForwardedRef(withClasses(Table));

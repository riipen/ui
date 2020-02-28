import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";
import withForwardedRef from "../utils/withForwardedRef";

class Table extends React.Component {
  static propTypes = {
    /**
     * What background to render for the table.
     * Defaults to grey100.
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
    backgroundColor: "grey100",

    layout: "auto"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      layout,
      backgroundColor,
      forwardedRef
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
      <React.Fragment>
        <table ref={forwardedRef} className={clsx(classes)} border="0">
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
      </React.Fragment>
    );
  }
}

export default withForwardedRef(withClasses(Table));

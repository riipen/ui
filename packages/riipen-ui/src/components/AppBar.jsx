import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class AppBar extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary", "white", "black"]),

    /**
     * The positioning type. The behavior of the different options is described
     * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
     */
    position: PropTypes.oneOf([
      "absolute",
      "fixed",
      "relative",
      "static",
      "sticky"
    ])
  };

  static defaultProps = {
    color: "primary",
    position: "fixed"
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, color, position } = this.props;

    const theme = this.context;

    const className = clsx(color, position, classes);

    return (
      <React.Fragment>
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            align-items: center;
            box-shadow: ${theme.shadows[3]};
            box-sizing: border-box;
            display: flex;
            padding: ${theme.spacing(3)}px;
            width: 100%;
            z-index: ${theme.zIndex.low};
          }

          .fixed {
            left: auto;
            position: fixed;
            right: 0;
            top: 0;
          }
          .absolute {
            left: auto;
            position: absolute;
            right: 0;
            top: 0;
          }
          .stickey {
            left: auto;
            position: sticky;
            right: 0;
            top: 0;
          }
          .static {
            position: static;
          }
          .relative {
            position: relative;
          }

          .primary {
            background-color: ${theme.palette.primary.main};
            color: ${theme.palette.primary.contrast};
          }
          .secondary {
            background-color: ${theme.palette.secondary.main};
            color: ${theme.palette.secondary.contrast};
          }
          .white {
            background-color: ${theme.palette.common.white};
            color: ${theme.palette.common.black};
          }
          .black {
            background-color: ${theme.palette.common.black};
            color: ${theme.palette.common.white};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default AppBar;

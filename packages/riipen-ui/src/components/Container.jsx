import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const Container = ({ border, classes, children, color, header, maxWidth }) => {
  const theme = React.useContext(ThemeContext);

  const className = clsx("root", classes);

  return (
    <React.Fragment>
      <div className={className}>
        {header}
        <div className={clsx(border && "border", color, header && "header")}>
          {children}
        </div>
      </div>
      <style jsx>{`
        .root {
          box-sizing: border-box;
          margin: 0 auto;
          max-width: ${maxWidth ? `${theme.breakpoints[maxWidth]}px` : "100%"};
          padding: 0 ${theme.spacing(6)}px;
          position: relative;
        }

        .border {
          border: 1px solid ${theme.palette.divider};
          box-shadow: ${theme.shadows[1]};
        }

        .border.header {
          border-top: none;
        }

        .white {
          background-color: ${theme.palette.common.white};
        }

        @media (max-width: ${theme.breakpoints.lg}px) {
          .root {
            padding: 0 ${theme.spacing(5)}px;
          }
        }

        @media (max-width: ${theme.breakpoints.md}px) {
          .root {
            padding: 0 ${theme.spacing(3)}px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Container.propTypes = {
  /**
   * Whether to have a border around the container.
   */
  border: PropTypes.bool,

  /**
   * The content inside the container.
   */
  children: PropTypes.any,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The color of the container.
   */
  color: PropTypes.oneOf(["default", "white"]),

  /**
   * The header component.
   */
  header: PropTypes.node,

  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   */
  maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", false])
};

Container.defaultProps = {
  border: false,
  classes: [],
  color: "default",
  maxWidth: "lg"
};

Container.displayName = "Container";

export default withClasses(Container);

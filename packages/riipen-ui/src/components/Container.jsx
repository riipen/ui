import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const Container = ({ classes, children, maxWidth }) => {
  const theme = React.useContext(ThemeContext);

  const style = {
    maxWidth: `${maxWidth ? `${theme.breakpoints[maxWidth]}px` : "100%"}`
  };

  const className = clsx("root", classes);

  return (
    <div className={className} style={style}>
      {children}
      <style jsx>{`
        .root {
          box-sizing: border-box;
          margin: 0 auto;
          padding: 0 ${theme.spacing(6)}px;
          position: relative;
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
    </div>
  );
};

Container.propTypes = {
  /**
   * The content inside the container.
   */
  children: PropTypes.any,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   */
  maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", false])
};

Container.defaultProps = {
  classes: [],
  maxWidth: "lg"
};

Container.displayName = "Container";

export default withClasses(Container);

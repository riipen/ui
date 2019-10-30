import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Container extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    classes: []
  };

  static contextType = ThemeContext;

  render() {
    const { classes, children, maxWidth } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            margin: 0 auto;
            max-width: ${maxWidth
              ? `${theme.breakpoints[maxWidth]}px`
              : "100%"};
            position: relative;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Container;

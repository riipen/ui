import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Avatar extends React.Component {
  static propTypes = {
    /**
     * Content to render inside the Banner.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The height to render the Banner at.
     */
    height: PropTypes.string,

    /**
     * The image source to display in the Banner.
     */
    src: PropTypes.string,

    /**
     * A tint color to apply over the Banner's image.
     */
    tint: PropTypes.oneOf([
      "primary",
      "secondary",
      "tertiary",
      "positive",
      "negative"
    ])
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, height, src, tint } = this.props;

    const theme = this.context;

    const className = clsx("banner", tint, classes);

    return (
      <React.Fragment>
        <div className={className}>{children}</div>
        <style jsx>{`
          .banner {
            background-image: url(${src});
            background-position: center;
            background-size: cover;
            display: flex;
            height: ${height};
            position: relative;
          }
          .banner::after {
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0.9;
            position: absolute;
            z-index: ${theme.zIndex.lowest};
          }
          .banner > :global(*) {
            z-index: ${theme.zIndex.low};
          }

          .primary::after {
            background-color: ${theme.palette.primary.main};
          }
          .secondary::after {
            background-color: ${theme.palette.secondary.main};
          }
          .tertiary::after {
            background-color: ${theme.palette.tertiary.main};
          }
          .positive::after {
            background-color: ${theme.palette.positive.main};
          }
          .negative::after {
            background-color: ${theme.palette.negative.main};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Avatar;

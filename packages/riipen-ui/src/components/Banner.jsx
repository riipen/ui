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
    classes: PropTypes.object,

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

    const className = clsx("banner", classes);

    const style = {
      backgroundImage: `url(${src})`,
      height
    };

    const overlayClassName = clsx("overlay", tint);

    return (
      <React.Fragment>
        <div className={className} style={style}>
          <div className={overlayClassName} />
          {children}
        </div>
        <style jsx>{`
          .banner {
            background-position: center;
            background-size: cover;
            position: relative;
          }

          .overlay {
            bottom: 0;
            left: 0;
            opacity: 0.4;
            position: absolute;
            right: 0;
            top: 0;
          }

          .primary {
            background-blend-mode: soft-light;
            background-color: ${theme.palette.primary.light};
          }
          .secondary {
            background-blend-mode: soft-light;
            background-color: ${theme.palette.secondary.light};
          }
          .tertiary {
            background-blend-mode: soft-light;
            background-color: ${theme.palette.tertiary.light};
          }
          .positive {
            background-blend-mode: soft-light;
            background-color: ${theme.palette.positive.light};
          }
          .negative {
            background-blend-mode: soft-light;
            background-color: ${theme.palette.negative.light};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Avatar;

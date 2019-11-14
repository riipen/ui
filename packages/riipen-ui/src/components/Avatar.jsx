import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class Avatar extends React.Component {
  static propTypes = {
    /**
     * Used to provide an alt attribute to the rendered img element.
     */
    alt: PropTypes.string.isRequired,

    /**
     * Used to render icon or text elements inside the Avatar if src is not set.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The height and width size to render the Avatar at.
     */
    size: PropTypes.string.isRequired,

    /**
     * The src attribute for the img element.
     */
    src: PropTypes.string,

    /**
     * The shape of the avatar.
     */
    variant: PropTypes.oneOf(["circle", "rounded", "square"])
  };

  static defaultProps = {
    size: "96px",
    variant: "circle"
  };

  static contextType = ThemeContext;

  render() {
    const { alt, children, classes, size, src, variant } = this.props;

    const theme = this.context;

    const className = clsx("avatar", variant, classes);

    return (
      <React.Fragment>
        {src ? (
          <img alt={alt} src={src} className={className} />
        ) : (
          <span className={className}>{children}</span>
        )}
        <style jsx>{`
          .avatar {
            align-items: center;
            border: 4px solid ${theme.palette.common.white};
            display: inline-flex;
            flex-shrink: 0;
            font-family: ${theme.typography.fontFamily};
            height: ${size};
            justify-content: center;
            line-height: 1;
            overflow: hidden;
            position: relative;
            user-select: none;
            width: ${size};
          }

          .circle {
            border-radius: 50%;
          }
          .rounded {
            border-radius: ${theme.shape.borderRadius.md};
          }
          .square {
            border-radius: 0px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Avatar;

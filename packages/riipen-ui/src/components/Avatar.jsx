import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Avatar extends React.Component {
  static displayName = "Avatar";

  static propTypes = {
    /**
     * Used to provide an alt attribute to the rendered img element.
     */
    alt: PropTypes.string,

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
    classes: [],
    size: "96px",
    variant: "circle"
  };

  getBorderSize() {
    const { size } = this.props;

    // Remove 'px' and get number of pixels
    const pixels = +size.substring(0, size.length - 2);

    switch (true) {
      case pixels < 70:
        return "2px";
      default:
        return "4px";
    }
  }

  static contextType = ThemeContext;

  render() {
    const { alt, children, classes, size, src, variant, ...other } = this.props;

    const theme = this.context;

    const className = clsx("avatar", variant, classes);

    return (
      <React.Fragment>
        <span className={className}>
          {src ? (
            <img alt={alt} src={src} className="image" {...other} />
          ) : (
            <span className="inner">{children}</span>
          )}
        </span>
        <style jsx>{`
          .avatar {
            background-color: ${theme.palette.grey[200]};
            border: ${this.getBorderSize()} solid ${theme.palette.common.white};
            display: inline-block;
            font-family: ${theme.typography.fontFamily};
            font-size: calc(${size} * 0.4);
            height: ${size};
            line-height: 1;
            max-height: ${size};
            max-width: ${size};
            min-height: ${size};
            min-width: ${size};
            overflow: hidden;
            user-select: none;
          }

          .circle {
            border-radius: 50%;
          }

          .image {
            height: 100%;
            width: 100%;
          }

          .inner {
            align-items: center;
            display: flex;
            flex-shrink: 0;
            height: 100%;
            justify-content: center;
            width: 100%;
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

export default withClasses(Avatar);

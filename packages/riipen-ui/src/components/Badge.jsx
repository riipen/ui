import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const RADIUS_STANDARD = 10;
const RADIUS_DOT = 5;

class Badge extends React.Component {
  static displayName = "Badge";

  static propTypes = {
    /**
     * The anchor of the badge.
     */
    anchor: PropTypes.shape({
      horizontal: PropTypes.oneOf(["left", "right"]).isRequired,
      vertical: PropTypes.oneOf(["bottom", "top"]).isRequired
    }),

    /**
     * The badge will be added relative to this node.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf([
      "negative",
      "positive",
      "primary",
      "secondary",
      "muted"
    ]),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.elementType,

    /**
     * The content rendered within the badge.
     */
    content: PropTypes.node,

    /**
     * Max count to show.
     */
    max: PropTypes.number,

    /**
     * Wrapped shape the badge should overlap.
     */
    overlap: PropTypes.oneOf(["circle", "rectangle"]),

    /**
     * Controls whether the badge is hidden when `badgeContent` is zero.
     */
    showZero: PropTypes.bool,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(["dot", "standard"])
  };

  static defaultProps = {
    anchor: {
      horizontal: "right",
      vertical: "top"
    },
    color: "primary",
    component: "span",
    max: 99,
    overlap: "rectangle",
    showZero: false,
    variant: "standard"
  };

  static contextType = ThemeContext;

  render() {
    const {
      anchor,
      children,
      classes,
      color,
      component: Component,
      content,
      max,
      overlap,
      showZero,
      variant
    } = this.props;

    if ((content === 0 && !showZero) || (content == null && variant !== "dot"))
      return null;

    const theme = this.context;

    const className = clsx("root");

    let value = "";

    if (variant !== "dot") {
      value = content > max ? `${max}+` : content;
    }

    return (
      <React.Fragment>
        <Component className={className}>
          {children}
          <span
            className={clsx(
              "badge",
              `${anchor.vertical}-${anchor.horizontal}-${overlap}`,
              color,
              variant,
              classes
            )}
          >
            {value}
          </span>
        </Component>
        <style jsx>{`
          .root {
            display: inline-flex;
            flex-shrink: 0;
            position: relative;
            vertical-align: middle;
          }

          .badge {
            align-content: center;
            align-items: center;
            border-radius: ${RADIUS_STANDARD}px;
            box-sizing: border-box;
            color: ${theme.palette.text.primary};
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            font-family: ${theme.typography.fontFamily};
            font-size: 12px;
            font-weight: ${theme.typography.fontWeight.medium};
            height: ${RADIUS_STANDARD * 2}px;
            justify-content: center;
            line-height: 1;
            min-width: ${RADIUS_STANDARD * 2}px;
            padding: 0 6px;
            position: absolute;
          }

          .dot {
            height: ${RADIUS_DOT * 2}px;
            min-width: ${RADIUS_DOT * 2}px;
            padding: 0;
          }

          .primary {
            background-color: ${theme.palette.primary.main};
            color: ${theme.palette.primary.contrast};
          }
          .secondary {
            background-color: ${theme.palette.secondary.main};
            color: ${theme.palette.secondary.contrast};
          }
          .positive {
            background-color: ${theme.palette.positive.main};
            color: ${theme.palette.positive.contrast};
          }
          .negative {
            background-color: ${theme.palette.negative.main};
            color: ${theme.palette.negative.contrast};
          }
          .muted {
            background-color: ${theme.palette.grey[400]};
            color: ${theme.palette.negative.contrast};
          }

          .top-right-rectangle {
            top: 0;
            right: 0;
            transform: scale(1) translate(50%, -50%);
            transform-origin: 100% 0%;
          }
          .bottom-right-rectangle {
            bottom: 0;
            right: 0;
            transform: scale(1) translate(50%, 50%);
            transform-origin: 100% 100%;
          }
          .top-left-rectangle {
            top: 0;
            left: 0;
            transform: scale(1) translate(-50%, -50%);
            transform-origin: 0% 0%;
          }
          .bottom-left-rectangle {
            bottom: 0;
            left: 0;
            transform: scale(1) translate(-50%, 50%);
            transform-origin: 0% 100%;
          }
          .top-right-circle {
            top: 14%;
            right: 14%;
            transform: scale(1) translate(50%, -50%);
            transform-origin: 100% 0%;
          }
          .bottom-right-circle {
            bottom: 14%;
            right: 14%;
            transform: scale(1) translate(50%, 50%);
            transform-origin: 100% 100%;
          }
          .top-left-circle {
            top: 14%;
            left: 14%;
            transform: scale(1) translate(-50%, -50%);
            transform-origin: 0% 0%;
          }
          .bottom-left-circle {
            bottom: 14%;
            left: 14%;
            transform: scale(1) translate(-50%, 50%);
            transform-origin: 0% 100%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Badge);

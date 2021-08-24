import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const COLUMNS = 12;
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class GridItem extends React.Component {
  static displayName = "GridItem";

  static propTypes = {
    /**
     * A whitelisted set of align items options for the grid item.
     */
    alignItems: PropTypes.oneOf([
      "flex-start",
      "center",
      "flex-end",
      "stretch",
      "baseline"
    ]),

    /**
     * The content of the grid item.
     */
    children: PropTypes.any,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The styling to pass into the flex-direction of the grid.
     */
    flexDirection: PropTypes.oneOf([
      "column",
      "column-reverse",
      "initial",
      "inherit",
      "row",
      "row-reverse"
    ]),

    /**
     * Defines if the grid item should grow to fill extra space in the row
     */
    flexGrow: PropTypes.number,

    /**
     * Defines if the grid item should shrink to allow more space in the row
     */
    flexShrink: PropTypes.number,

    /**
     * The styling to pass into the flex-wrap of the grid item.
     */
    flexWrap: PropTypes.oneOf([
      "inherit",
      "initial",
      "nowrap",
      "unset",
      "wrap",
      "wrap-reverse"
    ]),

    /**
     * A whitelisted set of justify content options for the grid item.
     */
    justifyContent: PropTypes.oneOf([
      "center",
      "flex-end",
      "flex-start",
      "space-around",
      "space-between",
      "space-evenly"
    ]),

    /**
     * The columns use at the large resolution. Can also be 'hidden'. Can also be 'hidden' or 'auto'.
     */
    lg: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(["auto", "hidden"])
    ]),

    /**
     * The columns use at the medium resolution. Can also be 'hidden'. Can also be 'hidden' or 'auto'.
     */
    md: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(["auto", "hidden"])
    ]),

    /**
     * The columns use at the small resolution. Can also be 'hidden'. Can also be 'hidden' or 'auto'.
     */
    sm: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(["auto", "hidden"])
    ]),

    /**
     * Defines the space between this grid item and other items.
     */
    spacing: PropTypes.oneOf(SPACINGS),

    /**
     * The size of the component to render.
     * Passed in by the Grid.
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),

    /**
     * The columns use at the extra small resolution. Can also be 'hidden' or 'auto'.
     */
    xs: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(["auto", "hidden"])
    ])
  };

  static defaultProps = {
    alignItems: "stretch",
    classes: [],
    lg: 12,
    spacing: 3,
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    size: "lg"
  };

  static contextType = ThemeContext;

  render() {
    const {
      alignItems,
      children,
      classes,
      spacing,
      flexGrow,
      flexShrink,
      flexWrap,
      flexDirection,
      justifyContent,
      size
    } = this.props;

    const theme = this.context;

    const { lg, md, sm, xs } = this.props;
    // determine size of component
    const itemColumns =
      (size === "md" && (md || lg)) ||
      (size === "sm" && (sm || md || lg)) ||
      (size === "xs" && (xs || sm || md || lg)) ||
      lg;

    // add class to component based on size it is rendering
    const itemSize =
      (itemColumns === lg && "lg") ||
      (itemColumns === md && "md") ||
      (itemColumns === sm && "sm") ||
      (itemColumns === xs && "xs");

    let hidden = false;
    let flexBasis = 0;
    if (itemColumns === "hidden") {
      hidden = true;
    } else if (itemColumns === "auto") {
      flexBasis = itemColumns;
    } else {
      flexBasis = `${(itemColumns / COLUMNS) * 100}%`;
    }

    const className = clsx(classes, itemSize);

    return (
      <>
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            align-items: ${alignItems};
            box-sizing: border-box;
            display: ${hidden ? "none" : "flex"};
            flex-basis: ${flexBasis};
            flex-direction: ${flexDirection};
            flex-grow: ${flexGrow};
            flex-shrink: ${flexShrink};
            flex-wrap: ${flexWrap};
            justify-content: ${justifyContent};
            margin-bottom: ${theme.spacing(spacing)}px;
            padding-left: ${theme.spacing(spacing)}px;
          }
        `}</style>
      </>
    );
  }
}

export default withClasses(GridItem);

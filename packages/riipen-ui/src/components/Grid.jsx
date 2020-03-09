import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Grid extends React.Component {
  static propTypes = {
    /**
     * A whitelisted set of align items options for the grid.
     */
    alignItems: PropTypes.oneOf([
      "flex-start",
      "center",
      "flex-end",
      "stretch",
      "baseline"
    ]),

    /**
     * The content of the grid.
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
      "row",
      "row-reverse",
      "column",
      "column-reverse",
      "initial",
      "inherit"
    ]),

    /**
     * The styling to pass into the flex-wrap of the grid.
     */
    flexWrap: PropTypes.oneOf([
      "nowrap",
      "wrap",
      "wrap-reverse",
      "inherit",
      "initial",
      "unset"
    ]),

    /**
     * A whitelisted set of justify content options for the grid.
     */
    justifyContent: PropTypes.oneOf([
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly"
    ]),

    /**
     * Defines the space between grid items in the grid.
     */
    spacing: PropTypes.oneOf(SPACINGS),

    /**
     * The function to callback to when the grid changes sizes
     * The callback includes the current size of the grid.
     */
    sizeChange: PropTypes.func
  };

  static defaultProps = {
    alignItems: "flex-start",
    classes: [],
    justifyContent: "flex-start",
    spacing: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    sizeChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      size: "lg"
    };
    this.resizeRef = React.createRef();
  }

  componentDidMount = () => {
    // If the user has support for the ResizeObserver use that, if not use the window resize event

    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(this.onResize);

      if (this.resizeObserver && this.resizeRef.current) {
        this.resizeObserver.observe(this.resizeRef.current);
      }
    } else {
      window.addEventListener("resize", this.onResize);
    }

    this.onResize();
  };

  onResize = () => {
    const size = this.getComponentSize();
    this.setState({ size });
    this.props.sizeChange(size);
  };

  getComponentSize = () => {
    const width = this.resizeRef.current?.clientWidth || 1080;
    return (
      (width >= this.context.breakpoints.lg && "lg") ||
      (width >= this.context.breakpoints.md && "md") ||
      (width >= this.context.breakpoints.sm && "sm") ||
      "xs"
    );
  };

  static contextType = ThemeContext;

  render() {
    const {
      alignItems,
      children,
      classes,
      justifyContent,
      spacing,
      flexDirection,
      flexWrap
    } = this.props;

    const { size } = this.state;

    const theme = this.context;

    const className = clsx(classes, size);

    const childrenWithProps = React.Children.map(children, child => {
      if (!child) return null;

      return React.cloneElement(child, { spacing, size });
    });

    return (
      <React.Fragment>
        <div ref={this.resizeRef} className={className}>
          {childrenWithProps}
        </div>
        <style jsx>{`
          div {
            align-items: ${alignItems};
            display: flex;
            flex-wrap: ${flexWrap};
            flex-direction: ${flexDirection};
            justify-content: ${justifyContent};
            margin-left: -${theme.spacing(spacing)}px;
            margin-bottom: -${theme.spacing(spacing)}px;
            min-height: 0;
            position: relative;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Grid);

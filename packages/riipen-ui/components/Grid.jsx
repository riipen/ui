import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

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
    spacing: PropTypes.oneOf(SPACINGS)
  };

  static defaultProps = {
    alignItems: "flex-start",
    classes: [],
    justifyContent: "flex-start",
    spacing: 1
  };

  static contextType = ThemeContext;

  render() {
    const {
      alignItems,
      children,
      classes,
      justifyContent,
      spacing
    } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { spacing })
    );

    return (
      <React.Fragment>
        <div className={className}>{childrenWithProps}</div>
        <style jsx>{`
          div {
            align-items: ${alignItems};
            display: flex;
            flex-flow: row wrap;
            justify-content: ${justifyContent};
            margin-left: -${theme.spacing(spacing)}px;
            margin-bottom: -${theme.spacing(spacing)}px;
            min-height: 0;
            position: relative;
          }
          div > :global(*) {
            display: inline-block;
            vertical-align: top;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Grid;

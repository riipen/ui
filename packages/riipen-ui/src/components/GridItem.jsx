import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

const COLUMNS = 12;
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class GridItem extends React.Component {
  static propTypes = {
    /**
     * The content of the grid item.
     */
    children: PropTypes.any,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The columns use at the large resolution. Can also be 'hidden'.
     */
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * The columns use at the medium resolution. Can also be 'hidden'.
     */
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * The columns use at the small resolution. Can also be 'hidden'.
     */
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Defines the space between this grid item and other items.
     */
    spacing: PropTypes.oneOf(SPACINGS)
  };

  static defaultProps = {
    classes: [],
    lg: 12,
    spacing: 3
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, lg, md, sm, spacing } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            box-sizing: border-box;
            margin-bottom: ${theme.spacing(spacing)}px;
            padding-left: ${theme.spacing(spacing)}px;
            width: ${(+lg / COLUMNS) * 100 || 0}%;
          }
          @media (max-width: ${theme.breakpoints.md}px) {
            div {
              display: ${md === "hidden" ? "none" : "initial"};
              width: ${((+md || +lg) / COLUMNS) * 100 || 0}%;
            }
          }
          @media (max-width: ${theme.breakpoints.sm}px) {
            div {
              display: ${[sm, md].includes("hidden") ? "none" : "initial"};
              width: ${((+sm || +md || +lg) / COLUMNS) * 100 || 0}%;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default GridItem;

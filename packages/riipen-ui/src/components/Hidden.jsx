import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Hidden extends React.Component {
  static displayName = "Hidden";

  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Given some size, will hide content at that size and up / down (direction).
     */
    direction: PropTypes.oneOf(["down", "up"]),

    /**
     * The size at which to hide content in tandum with a direction.
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]).isRequired
  };

  static defaultProps = {
    direction: "down"
  };

  static contextType = ThemeContext;

  render() {
    const { children, direction, size } = this.props;

    const theme = this.context;

    const className = clsx(`${size}-${direction}`);

    return (
      <React.Fragment>
        <div className={className}>{children}</div>
        <style jsx>{`
          @media (min-width: ${theme.breakpoints.xs}px) {
            .xs-up {
              display: none;
            }
          }
          @media (max-width: ${theme.breakpoints.xs}px) {
            .xs-down {
              display: none;
            }
          }

          @media (min-width: ${theme.breakpoints.sm}px) {
            .sm-up {
              display: none;
            }
          }
          @media (max-width: ${theme.breakpoints.sm}px) {
            .sm-down {
              display: none;
            }
          }

          @media (min-width: ${theme.breakpoints.md}px) {
            .md-up {
              display: none;
            }
          }
          @media (max-width: ${theme.breakpoints.md}px) {
            .md-down {
              display: none;
            }
          }

          @media (min-width: ${theme.breakpoints.lg}px) {
            .lg-up {
              display: none;
            }
          }
          @media (max-width: ${theme.breakpoints.lg}px) {
            .lg-down {
              display: none;
            }
          }

          @media (min-width: ${theme.breakpoints.xl}px) {
            .xl-up {
              display: none;
            }
          }
          @media (max-width: ${theme.breakpoints.xl}px) {
            .xl-down {
              display: none;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Hidden);

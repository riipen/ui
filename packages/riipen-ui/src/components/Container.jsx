import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import ContainerHeader from "./ContainerHeader";

class Container extends React.Component {
  static displayName = "Container";

  static propTypes = {
    /**
     * Whether to have a border around the container.
     */
    border: PropTypes.bool,

    /**
     * The content inside the container.
     */
    children: PropTypes.any,

    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array,

    /**
     * The color of the container.
     */
    color: PropTypes.oneOf("default", "white"),

    /**
     * The props to pass to the ContainerHeader.
     */
    headerProps: PropTypes.object,

    /**
     * Determine the max-width of the container.
     * The container width grows with the size of the screen.
     */
    maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", false])
  };

  static defaultProps = {
    border: false,
    classes: [],
    color: "default",
    maxWidth: "lg"
  };

  static contextType = ThemeContext;

  render() {
    const {
      border,
      classes,
      children,
      color,
      headerProps,
      maxWidth
    } = this.props;

    const theme = this.context;

    const className = clsx("root", classes);

    return (
      <React.Fragment>
        <div className={className}>
          {headerProps && <ContainerHeader {...headerProps} />}
          <div className={clsx(border && "border", color)}>{children}</div>
        </div>
        <style jsx>{`
          .root {
            box-sizing: border-box;
            margin: 0 auto;
            max-width: ${maxWidth
              ? `${theme.breakpoints[maxWidth]}px`
              : "100%"};
            padding: 0 ${theme.spacing(6)}px;
            position: relative;
          }

          .border {
            box-shadow: ${theme.shadows[1]};
          }

          .white {
            background-color: ${theme.palette.common.white};
          }

          @media (max-width: ${theme.breakpoints.lg}px) {
            .root {
              padding: 0 ${theme.spacing(5)}px;
            }
          }

          @media (max-width: ${theme.breakpoints.md}px) {
            .root {
              padding: 0 ${theme.spacing(3)}px;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Container);

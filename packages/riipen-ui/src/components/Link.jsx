import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Link extends React.Component {
  static propTypes = {
    /**
     * The content of the link.
     *
     */
    children: PropTypes.any.isRequired,

    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array,

    /**
     * The color of the link.
     */
    color: PropTypes.oneOf([
      "inherit",
      "negative",
      "positive",
      "primary",
      "secondary",
      "tertiary",
      "white"
    ]),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.elementType,

    /**
     * Controls when the link should have an underline.
     */
    underline: PropTypes.oneOf(["none", "hover", "always"])
  };

  static defaultProps = {
    classes: [],
    color: "primary",
    component: "a",
    underline: "none"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      color,
      component: Component,
      underline,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx(color, classes);

    return (
      <React.Fragment>
        <Component className={className} {...other}>
          {children}
        </Component>
        <style jsx>{`
          a {
            cursor: pointer;
            font-family: ${theme.typography.fontFamily};
            text-decoration: ${underline === "always" ? "underline" : "none"};
            transition: ${theme.transitions.standard} all;
          }
          a:hover {
            text-decoration: ${underline === "hover" ? "underline" : "none"};
          }

          .inherit {
            color: inherit;
          }

          .primary {
            color: ${theme.palette.primary.main};
          }
          .primary:active,
          .primary:focus,
          .primary:hover {
            color: ${theme.palette.primary.dark};
          }

          .secondary {
            color: ${theme.palette.secondary.main};
          }
          .secondary:active,
          .secondary:focus,
          .secondary:hover {
            color: ${theme.palette.secondary.dark};
          }

          .tertiary {
            color: ${theme.palette.tertiary.main};
          }
          .tertiary:active,
          .tertiary:focus,
          .tertiary:hover {
            color: ${theme.palette.tertiary.dark};
          }

          .positive {
            color: ${theme.palette.positive.main};
          }
          .positive:active,
          .positive:focus,
          .positive:hover {
            color: ${theme.palette.positive.dark};
          }

          .negative {
            color: ${theme.palette.negative.main};
          }
          .negative:active,
          .negative:focus,
          .negative:hover {
            color: ${theme.palette.negative.dark};
          }

          .white {
            color: ${theme.palette.common.white};
          }
          .white:active,
          .white:focus,
          .white:hover {
            color: ${theme.palette.grey[200]};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses()(Link);

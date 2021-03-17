import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const Paper = props => {
  const {
    children,
    classes,
    component: Component,
    elevation,
    padding,
    rounded,
    variant,
    ...other
  } = props;

  const theme = React.useContext(ThemeContext);

  const className = clsx(
    "root",
    classes,
    rounded ? "rounded" : null,
    variant === "outlined" ? "outlined" : "elevation"
  );

  return (
    <React.Fragment>
      <Component className={className} {...other}>
        {children}
      </Component>
      <style jsx>{`
        .root {
          background-color: ${theme.palette.common.white};
          display: inline-block;
          padding: ${theme.spacing[padding]};
        }

        .elevation {
          box-shadow: ${theme.shadows[elevation]};
        }

        .outlined {
          border: 1px solid ${theme.palette.divider};
        }

        .rounded {
          border-radius: ${theme.shape.borderRadius.md};
        }
      `}</style>
    </React.Fragment>
  );
};

Paper.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The elevation of the box shadow with respect to the current theme.
   */
  elevation: PropTypes.number,

  /**
   * The amount of padding the paper should have.
   */
  padding: PropTypes.number,

  /**
   * If `true`, rounded corners are enabled.
   */
  rounded: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["elevation", "outlined"])
};

Paper.defaultProps = {
  classes: [],
  component: "div",
  padding: 2,
  rounded: false,
  variant: "elevation"
};

Paper.displayName = "Paper";

export default withClasses(Paper);

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
    rounded,
    elevation,
    variant,
    ...other
  } = props;

  const theme = React.useContext(ThemeContext);

  const className=clsx(
    "root",
    classes,
    rounded ? "rounded" : null,
    variant === "outlined" ? "outlined" : "elevation"
  );
  
  return (
    <React.Fragment>
    <Component 
    className={className}
      {...other}
    >
      {children}
      </Component>
     
      <style jsx>
        {`
          .root {
            background-color: ${theme.palette.common.white};
            color: ${theme.palette.text.primary}
            padding: ${theme.spacing(3)}px;
            z-index: ${theme.zIndex.low};
            display: inline-block;
            border-radius: 0px;
            },

            .elevation {
              box-shadow: ${theme.shadows[elevation]};
              box-sizing: border-box;
              border: 0px
          }

          .outlined {
            border: 1px solid ${theme.palette.divider};
        }
            
            .rounded {
                border-radius: ${theme.shape.borderRadius.md};
            }
      `}
      </style>

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
   * The elevation of the box shadow.
   */
  elevation: PropTypes.number,

  /**
   * If `false`, rounded corners are disabled.
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
  rounded: false,
  variant: "elevation"
};

Paper.displayName = "Paper";

export default withClasses(Paper);

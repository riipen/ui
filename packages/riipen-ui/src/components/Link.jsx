import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { withThemeContext, useIsFocusVisible } from "../utils";

const Link = props => {
  const {
    children,
    classes,
    color,
    component: Component,
    theme,
    underline,
    ...other
  } = props;

  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const handleFocus = e => {
    setFocusVisible(isFocusVisible(e));
  };

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const className = clsx(color, focusVisible ? "focusVisible" : null, classes);

  return (
    <React.Fragment>
      <Component
        ref={ref}
        className={className}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...other}
      >
        {children}
      </Component>
      <style jsx>{`
        a {
          cursor: pointer;
          font-family: ${theme.typography.fontFamily};
          text-decoration: ${underline === "always" ? "underline" : "none"};
          transition: ${theme.transitions.standard} all;
        }

        a:focus {
          outline: 0;
        }

        a.focusVisible {
          outline: 5px auto -webkit-focus-ring-color;
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
        .primary.focusVisible,
        .primary:hover {
          color: ${theme.palette.primary.dark};
        }

        .secondary {
          color: ${theme.palette.secondary.main};
        }
        .secondary:active,
        .secondary.focusVisible,
        .secondary:hover {
          color: ${theme.palette.secondary.dark};
        }

        .tertiary {
          color: ${theme.palette.tertiary.main};
        }
        .tertiary:active,
        .tertiary.focusVisible,
        .tertiary:hover {
          color: ${theme.palette.tertiary.dark};
        }

        .positive {
          color: ${theme.palette.positive.main};
        }
        .positive:active,
        .positive.focusVisible,
        .positive:hover {
          color: ${theme.palette.positive.dark};
        }

        .negative {
          color: ${theme.palette.negative.main};
        }
        .negative:active,
        .negative.focusVisible,
        .negative:hover {
          color: ${theme.palette.negative.dark};
        }

        .white {
          color: ${theme.palette.common.white};
        }
        .white:active,
        .white.focusVisible,
        .white:hover {
          color: ${theme.palette.grey[200]};
        }
      `}</style>
    </React.Fragment>
  );
};

Link.propTypes = {
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
  underline: PropTypes.oneOf(["none", "hover", "always"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object
};

Link.defaultProps = {
  classes: [],
  color: "primary",
  component: "a",
  underline: "none"
};

Link.displayName = "Link";

export default withThemeContext(Link);

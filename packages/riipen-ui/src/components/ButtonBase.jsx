import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

const ButtonBase = ({
  ariaLabel,
  children,
  classes,
  type,
  variant,
  ...other
}) => {
  const className = clsx("button", variant, classes);
  return (
    <>
      <button
        aria-label={ariaLabel}
        className={className}
        type={type}
        {...other}
      >
        {children}
      </button>
      <style jsx>{`
        .button {
          cursor: pointer;
        }

        .button:focus {
          outline: 5px auto -webkit-focus-ring-color;
        }

        .default {
          background-color: transparent;
          border: none;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

ButtonBase.propTypes = {
  // external

  /**
   * The aria-label to provide to the button
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * The children to render within the button
   */
  children: PropTypes.node.isRequired,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

  /**
   * The variant for the button. Default clears normal html button styles.
   */
  variant: PropTypes.oneOf(["default"]),

  /**
   * Whether traditional button styles (border, background) should be cleared
   */
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

ButtonBase.defaultProps = {
  classes: [],
  variant: "default",
  type: "button"
};

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;

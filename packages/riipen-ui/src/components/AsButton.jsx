import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

const AsButton = ({
  ariaLabel,
  classes,
  children,
  clearButtonStyle,
  type,
  ...other
}) => (
  <>
    <button
      aria-label={ariaLabel}
      className={clsx([
        "button",
        classes,
        clearButtonStyle ? "clearButtonStyle" : null
      ])}
      type={type}
      {...other}
    >
      {children}
    </button>
    <style jsx>{`
      .clearButtonStyle {
        background-color: transparent;
        border: none;
        text-decoration: none;
      }

      .button {
        cursor: pointer;
      }

      .button:focus {
        outline: 5px auto -webkit-focus-ring-color;
      }
    `}</style>
  </>
);

AsButton.propTypes = {
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
  classes: PropTypes.array,

  /**
   * Whether traditional button styles (border, background) should be cleared
   */
  clearButtonStyle: PropTypes.bool,

  /**
   * Whether traditional button styles (border, background) should be cleared
   */
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

AsButton.defaultProps = {
  classes: [],
  clearButtonStyle: true,
  type: "button"
};

AsButton.displayName = "AsButton";

export default AsButton;

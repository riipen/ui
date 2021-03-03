import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { useIsFocusVisible, withThemeContext } from "../utils";

const ListItem = props => {
  const { children, classes, color, theme, onClick, ...other } = props;

  const handleChange = e => {
    if (!onClick) {
      return;
    }

    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onClick(e);
    }

    return;
  };

  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const handleFocus = e => {
    setFocusVisible(isFocusVisible(e));
  };

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const className = clsx(
    classes,
    focusVisible ? "focusVisible" : null,
    color,
    "list-item"
  );

  const focusColour = (
    theme.palette[color] || theme.palette[ListItem.defaultProps.color]
  ).main;

  return (
    <React.Fragment>
      <div
        ref={ref}
        tabIndex="0"
        role={onClick ? "button" : ""}
        className={className}
        onKeyDown={handleChange}
        onClick={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...other}
      >
        {children}
      </div>
      <style jsx>{`
        .list-item {
          border: none;
          box-sizing: border-box;
          margin: 0;
          outline: 0;
          padding: ${theme.spacing(2)}px 0;
        }

        .list-item.focusVisible {
          color: ${focusColour};
          outline: 5px auto -webkit-focus-ring-color;
        }
      `}</style>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  /**
   * The content of the list item.
   */
  children: PropTypes.any,

  /**
   * Array of additional CSS classes to use.
   */
  classes: PropTypes.array,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["primary", "secondary"]),

  /**
   * function to call when the list item is selected.
   */
  onClick: PropTypes.func,

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object
};

ListItem.defaultProps = {
  color: "primary",
  classes: []
};

ListItem.displayName = "ListItem";

export default withThemeContext(ListItem);

import clsx from "clsx";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import useIsFocusVisible from "../utils/useIsFocusVisible";
import withClasses from "../utils/withClasses";

const MenuItem = ({
  children,
  classes,
  color,
  disabled,
  onSelect,
  onSelected,
  selected,
  ...other
}) => {
  const theme = useContext(ThemeContext);

  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const getLinkedStyles = () => {
    return css.resolve`
      .menu-item {
        box-sizing: border-box;
        color: ${theme.palette.text.secondary};
        cursor: pointer;
        font-family: ${theme.typography.body1.fontFamily};
        font-size: ${theme.typography.body1.fontSize};
        font-weight: ${theme.typography.body1.fontWeight};
        letter-spacing: ${theme.typography.body1.letterSpacing};
        line-height: ${theme.typography.body1.lineHeight};
        margin: 0;
        outline: 0;
        padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
        text-align: inherit;
      }

      .menu-item.focusVisible {
        color: ${theme.palette.primary.main};
        outline: 5px auto;
      }
      .menu-item:hover {
        background-color: ${theme.palette.grey[100]};
      }

      .menu-item.disabled:hover {
        background-color: ${theme.palette.grey[50]};
        border-color: transparent;
        color: ${theme.palette.text.secondary};
      }

      .menu-item.disabled.focusVisible {
        background-color: ${theme.palette.grey[50]};
        border-color: transparent;
        color: ${theme.palette.text.secondary};
        outline: 0;
      }

      .menu-item.primary,
      .menu-item.secondary {
        border-left: 3px solid transparent;
      }

      .menu-item.primary:hover {
        border-color: ${theme.palette.primary.main};
      }

      .menu-item.primary.focusVisible {
        color: ${theme.palette.primary.main};
        outline: 5px auto;
      }

      .menu-item.secondary:hover {
        border-color: ${theme.palette.secondary.main};
      }

      .menu-item.secondary.focusVisible {
        color: ${theme.palette.secondary.main};
        outline: 5px auto;
      }

      .menu-item.selected {
        background-color: ${theme.palette.grey[200]};
        color: ${theme.palette.text.primary};
      }

      .menu-item.selected.primary {
        border-color: ${theme.palette.primary.main};
      }

      .menu-item.selected.secondary {
        border-color: ${theme.palette.secondary.main};
      }

      .menu-item.disabled {
        background-color: ${theme.palette.grey[50]};
        border-color: transparent;
        cursor: inherit;
        font-weight: ${theme.typography.fontWeight.light};
        opacity: 0.6;
      }

      .menu-item.disabled:hover {
        background-color: ${theme.palette.grey[50]};
        border-color: transparent;
      }
    `;
  };

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const handleClick = e => {
    if (disabled) {
      e.stopPropagation();
    }

    if (onSelect && !disabled) {
      onSelect(e);

      if (onSelected) onSelected(e);
    }
  };

  const handleFocus = e => {
    setFocusVisible(isFocusVisible(e));
  };

  const handleKeyDown = e => {
    if (onSelect && e.type === "keydown" && e.key === "Enter") {
      onSelect(e);

      if (onSelected) onSelected(e);
    }
  };

  const linkedStyles = getLinkedStyles();

  const className = clsx(
    "menu-item",
    linkedStyles.className,
    color,
    {
      focusVisible,
      selected,
      disabled
    },
    classes
  );

  return (
    <React.Fragment>
      <div
        ref={ref}
        tabIndex="0"
        role={onSelect ? "button" : ""}
        className={className}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...other}
      >
        {children}
      </div>
      {linkedStyles.styles}
    </React.Fragment>
  );
};

MenuItem.displayName = "MenuItem";

MenuItem.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Array of additional CSS classes to use.
   */
  classes: PropTypes.array,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["primary", "secondary"]),

  /**
   * Whether or not the item is disabled
   */
  disabled: PropTypes.bool,

  /**
   * The function callback for when a menu item is selected
   */
  onSelect: PropTypes.func,

  /**
   * The function callback after a menu item is selected
   */
  onSelected: PropTypes.func,

  /**
   * Whether or not the item is selected
   */
  selected: PropTypes.bool
};

MenuItem.defaultProps = {
  classes: []
};

export default withClasses(MenuItem);

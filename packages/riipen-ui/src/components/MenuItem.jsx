import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import ListItem from "./ListItem";

class MenuItem extends React.Component {
  static displayName = "MenuItem";

  static propTypes = {
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
    onClick: PropTypes.func,

    /**
     * Whether or not the item is selected
     */
    selected: PropTypes.bool
  };

  static defaultProps = {
    color: "primary",
    classes: []
  };

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      .menu-item {
        border-left: 3px solid transparent;
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

      .menu-item.primary:hover {
        border-color: ${theme.palette.primary.main};
      }

      .menu-item.primary.focusVisible {
        color: ${theme.palette.primary.main};
        outline: 5px auto -webkit-focus-ring-color;
      }

      .menu-item.secondary:hover {
        border-color: ${theme.palette.secondary.main};
      }

      .menu-item.secondary.focusVisible {
        color: ${theme.palette.secondary.main};
        outline: 5px auto -webkit-focus-ring-color;
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

  static contextType = ThemeContext;

  render() {
    const {
      onClick,
      classes,
      children,
      disabled,
      selected,
      ...other
    } = this.props;

    const linkedStyles = this.getLinkedStyles();

    const className = clsx(
      "menu-item",
      linkedStyles.className,
      {
        selected,
        disabled
      },
      classes
    );

    const handleClick = e => {
      if (disabled) {
        e.stopPropagation();
      }
      if (onClick && !disabled) onClick(e);
    };

    return (
      <React.Fragment>
        <ListItem onClick={handleClick} classes={[className]} {...other}>
          {children}
        </ListItem>
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default withClasses(MenuItem);

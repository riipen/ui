import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import ListItem from "./ListItem";

class MenuItem extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * The function callback for when a menu item is selected
     */
    onClick: PropTypes.func,

    /**
     * The classes to apply to the element
     */
    classes: PropTypes.string,

    /**
     * The type of the root object
     */
    type: PropTypes.string,

    /**
     * Whether or not the item is selected
     */
    selected: PropTypes.bool,

    /**
     * Whether or not the item is disabled
     */
    disabled: PropTypes.bool,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"])
  };

  static defaultProps = {
    color: "primary"
  };

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      .menu-item {
        background-color: ${theme.palette.grey[100]};
        cursor: pointer;
      }
      .menu-item:hover {
        background-color: ${theme.palette.grey[200]};
      }

      .menu-item.disabled {
        cursor: inherit;
        background-color: ${theme.palette.grey[50]};
        font-weight: ${theme.typography.fontWeight.light};
      }

      .menu-item.disabled:hover {
        background-color: ${theme.palette.grey[50]};
        color: ${theme.palette.text.secondary};
      }

      .menu-item.selected {
        background-color: ${theme.palette.grey[200]};
        color: ${theme.palette.text.primary};
      }

      .menu-item.selected.primary {
        border-left: ${theme.spacing(1)}px solid ${theme.palette.primary.main};
      }

      .menu-item.selected.secondary {
        border-left: ${theme.spacing(1)}px solid ${theme.palette.secondary.main};
      }
    `;
  };

  static contextType = ThemeContext;

  render() {
    const { onClick, classes, children, disabled, selected } = this.props;

    const linkedStyles = this.getLinkedStyles();

    const className = clsx(classes, "menu-item", linkedStyles.className, {
      selected
    });

    const handleClick = () => {
      if (onClick && !disabled) onClick();
    };

    return (
      <React.Fragment>
        <ListItem onClick={handleClick} classes={className} {...this.props}>
          {children}
        </ListItem>
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default MenuItem;

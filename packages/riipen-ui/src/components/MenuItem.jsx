import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import ThemeContext from "../styles/ThemeContext";

class MenuItem extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * The function callback for when a menu item is selected
     */
    handleClick: PropTypes.func,

    /**
     * The classes to apply to the element
     */
    classes: PropTypes.string,

    /**
     * The type of the root object
     */
    type: PropTypes.string
  };

  static contextType = ThemeContext;

  render() {
    const { handleClick, classes, type = "div" } = this.props;

    const Component = type;

    const className = clsx(classes, "root");

    const theme = this.context;

    const onClick = () => {
      if (!handleClick) return;
      handleClick();
    };

    const { children } = this.props;
    return (
      <React.Fragment>
        <Component type={type} className={className} onClick={onClick}>
          {children}
        </Component>
        <style jsx>{`
          .root {
            margin: 0;
            padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
            background-color: ${theme.palette.background};
            color: ${theme.palette.text.secondary};
            cursor: pointer;
            font-family: ${theme.typography.fontFamily};
            font-size: 13px;
            font-weight: ${theme.typography.fontWeight.medium};
            letter-spacing: 1px;
            width: 100%;
            outline: 0;
            border-left: 5px solid transparent;
          }

          .root:hover {
            background-color: ${theme.palette.grey[300]};
            color: ${theme.palette.text.primary};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default MenuItem;

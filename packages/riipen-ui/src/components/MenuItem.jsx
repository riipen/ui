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

    handleClick: PropTypes.func,

    value: PropTypes.any,

    classes: PropTypes.string,

    type: PropTypes.string
  };

  static contextType = ThemeContext;

  render() {
    const { handleClick, value, classes, type = "div" } = this.props;

    const Component = type;

    const className = clsx(classes, "root");

    const theme = this.context;

    const onClick = () => {
      if (!handleClick) return;
      handleClick(value);
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

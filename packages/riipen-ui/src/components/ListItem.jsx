import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class ListItem extends React.Component {
  static propTypes = {
    /**
     * The content of the list item.
     */
    children: PropTypes.any,

    /**
     * Array of additional CSS classes to use.
     *
     * @type {Array}
     */
    classes: PropTypes.array,

    /**
     *
     */
    button: PropTypes.bool,

    /**
     *
     */
    autoFocus: PropTypes.bool
  };

  static defaultProps = {
    classes: []
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, button, autoFocus } = this.props;

    const className = clsx(classes, "root", {});

    let Component = "li";
    if (button) {
      Component = "button";
    }

    const theme = this.context;

    return (
      <React.Fragment>
        <Component autoFocus={autoFocus} className={className}>
          {children}
        </Component>
        <style jsx>{`
          .root {
            margin: 0;
            box-sizing: border-box;
            padding: ${theme.spacing(2)}px ${theme.spacing(3)}px;
            background-color: ${theme.palette.background.default};
            color: ${theme.palette.text.secondary};
            cursor: pointer;
            font-family: ${theme.typography.fontFamily};
            font-size: 13px;
            font-weight: ${theme.typography.fontWeight.medium};
            letter-spacing: 1px;
            width: 100%;
            outline: 0;
            border: none;
            text-align: inherit;
            border-left: 5px solid transparent;
          }

          .root:hover {
            background-color: ${theme.palette.grey[300]};
            color: ${theme.palette.text.primary};
          }

          .root:focus {
            background-color: ${theme.palette.grey[400]};
            color: ${theme.palette.text.primary};
          }

          .root:hover:focus {
            background-color: ${theme.palette.grey[500]};
            color: ${theme.palette.text.primary};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default ListItem;

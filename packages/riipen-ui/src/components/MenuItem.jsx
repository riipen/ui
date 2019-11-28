import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

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
     *
     */
    autoFocus: PropTypes.bool,

    /**
     *
     */
    forwardedRef: PropTypes.any
  };

  static defaultProps = {
    forwardedRef: React.createRef()
  };

  render() {
    const { onClick, classes, autoFocus, children } = this.props;

    const className = clsx(classes, "root");

    const handleClick = () => {
      if (!onClick) return;
      onClick();
    };

    return (
      <React.Fragment>
        <ListItem
          onClick={handleClick}
          autoFocus={autoFocus}
          className={className}
          ref={this.props.forwardedRef}
          button
        >
          {children}
        </ListItem>
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

export default MenuItem;

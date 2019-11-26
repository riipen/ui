import React from "react";

import PropTypes from "prop-types";

import MenuItem from "./MenuItem";

class MenuList extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([MenuItem])
      })
    ),

    selectedValue: PropTypes.number,

    handleClick: PropTypes.func
  };

  render() {
    const { children, handleClick } = this.props;

    return (
      <React.Fragment>
        {children.map((child, i) => {
          return React.cloneElement(child, {
            key: i,
            handleClick,
            ...child.props
          });
        })}
      </React.Fragment>
    );
  }
}

export default MenuList;

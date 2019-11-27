import React from "react";

import PropTypes from "prop-types";

import MenuList from "./MenuList";
import MenuItem from "./MenuItem";
import Popover from "./Popover";

class Menu extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([MenuItem])
      })
    ),

    /**
     * The element the menu is attached too
     */
    anchorEl: PropTypes.object,

    anchorPosition: PropTypes.object,

    contentPosition: PropTypes.object,

    onClose: PropTypes.func
  };

  render() {
    const { children, anchorEl, anchorPosition, contentPosition } = this.props;

    const handleClose = () => {
      this.props.onClose();
    };

    const handleClick = () => {
      // handleClose();
    };

    return (
      <React.Fragment>
        {anchorEl && (
          <Popover
            handleClose={handleClose}
            anchorPosition={anchorPosition}
            contentPosition={contentPosition}
            anchorEl={anchorEl}
          >
            <MenuList handleClick={handleClick}>{children}</MenuList>
          </Popover>
        )}
      </React.Fragment>
    );
  }
}

export default Menu;

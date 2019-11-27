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

    /**
     * The location to attach the content too on the anchor element
     */
    anchorPosition: PropTypes.object,

    /**
     * The location to attach the anchor to on the content element
     */
    contentPosition: PropTypes.object,

    /**
     * The function callback to use when the menu closes
     */
    onClose: PropTypes.func
  };

  render() {
    const { children, anchorEl, anchorPosition, contentPosition } = this.props;

    const handleClose = () => {
      this.props.onClose();
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
            <MenuList autoFocus>{children}</MenuList>
          </Popover>
        )}
      </React.Fragment>
    );
  }
}

export default Menu;

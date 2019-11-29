import React from "react";

import PropTypes from "prop-types";

import clsx from "clsx";

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
    onClose: PropTypes.func,

    /**
     * The index of the item selected in the list
     */
    selectedIndex: PropTypes.number,

    /**
     * Whether to autofocus the first element on first open
     */
    autoFocus: PropTypes.bool,

    /**
     * The function callback for when the selection is changed
     */
    selectChange: PropTypes.func,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array
  };

  static defaultProps = {
    color: "primary",
    classes: []
  };

  constructor(props) {
    super(props);
    const { selectedIndex = -1 } = props;
    this.state = {
      activeItemIndex: selectedIndex
    };
  }

  handleClose = () => {
    const { onClose } = this.props;
    const { activeItemIndex } = this.state;
    if (onClose) onClose(activeItemIndex);
  };

  handleChange = idx => {
    this.setState({
      activeItemIndex: idx
    });
    const { selectChange } = this.props;
    if (selectChange) selectChange(idx);
  };

  render() {
    const {
      children,
      anchorEl,
      anchorPosition,
      contentPosition,
      classes
    } = this.props;
    const { activeItemIndex } = this.state;

    const className = clsx(classes, "menu");

    return (
      <React.Fragment>
        {anchorEl && (
          <Popover
            handleClose={this.handleClose}
            anchorPosition={anchorPosition}
            contentPosition={contentPosition}
            anchorEl={anchorEl}
          >
            <MenuList
              classes={className}
              selectChange={this.handleChange}
              selectedIndex={activeItemIndex}
              {...this.props}
            >
              {children}
            </MenuList>
          </Popover>
        )}
      </React.Fragment>
    );
  }
}

export default Menu;

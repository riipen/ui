import React from "react";

import PropTypes from "prop-types";

import withClasses from "../utils/withClasses";

import MenuList from "./MenuList";
import Popover from "./Popover";

class Menu extends React.Component {
  static propTypes = {
    /**
     * The element the menu is attached too
     */
    anchorEl: PropTypes.object,

    /**
     * The location to attach the content too on the anchor element
     */
    anchorPosition: PropTypes.object,

    /**
     * Whether to autofocus the first element on first open
     */
    autoFocus: PropTypes.bool,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

    /**
     * Whether or not the menu should close when an option is chosen with a click event
     */
    closeOnClick: PropTypes.bool,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * The location to attach the anchor to on the content element
     */
    contentPosition: PropTypes.object,

    /**
     * Whether or not the menu should be rendered
     */
    isOpen: PropTypes.bool,

    /**
     * Whether or not the popout should be forced to stay on screen
     */
    keepOnScreen: PropTypes.bool,

    /**
     * The function callback for when the selection is changed
     */
    onChange: PropTypes.func,

    /**
     * The function callback to use when the menu closes
     */
    onClose: PropTypes.func,

    /**
     * The styles to be applied to the popover list
     */
    popoverStyles: PropTypes.object,

    /**
     * The index of the item selected in the list
     */
    selectedIndex: PropTypes.number,

    /**
     * The margins of the page the popover should respect
     */
    marginThreshold: PropTypes.number,

    /**
     * The type of menu to create
     * Use 'menu' for lists of links
     */
    variant: PropTypes.oneOf(["menu", "selection"])
  };

  static defaultProps = {
    color: "primary",
    classes: [],
    closeOnClick: true,
    isOpen: true,
    keepOnScreen: false,
    popoverStyles: {},
    variant: "menu"
  };

  componentDidUpdate(oldProps) {
    const { anchorEl, isOpen } = this.props;
    const menuDidOpen =
      (oldProps.anchorEl == null && anchorEl) || (!oldProps.isOpen && isOpen);
    if (menuDidOpen && document.activeElement) {
      document.activeElement.blur();
    }
  }

  handleChange = (idx, event) => {
    const { onChange, closeOnClick, onClose } = this.props;
    if (onClose && closeOnClick && event && event.type === "click")
      onClose(idx);
    if (onChange) onChange(idx, event);
  };

  render() {
    const {
      anchorEl,
      anchorPosition,
      children,
      contentPosition,
      keepOnScreen,
      isOpen,
      onClose,
      popoverStyles,
      selectedIndex,
      variant,
      marginThreshold,
      ...other
    } = this.props;

    return (
      <React.Fragment>
        <Popover
          onClose={onClose}
          anchorPosition={anchorPosition}
          contentPosition={contentPosition}
          lockScroll={false}
          isOpen={isOpen}
          anchorEl={anchorEl}
          styles={popoverStyles}
          keepOnScreen={keepOnScreen}
          marginThreshold={marginThreshold}
        >
          <MenuList
            selectChange={this.handleChange}
            selectedIndex={selectedIndex}
            variant={variant}
            {...other}
          >
            {children}
          </MenuList>
        </Popover>
      </React.Fragment>
    );
  }
}

export default withClasses(Menu);

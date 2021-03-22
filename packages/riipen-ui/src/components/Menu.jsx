import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

import MenuList from "./MenuList";
import Popover from "./Popover";

class Menu extends React.Component {
  static displayName = "Menu";

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
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

    /**
     * Whether or not the menu should close when an option is selected
     */
    closeOnSelect: PropTypes.bool,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * The location to attach the anchor to on the content element
     */
    contentPosition: PropTypes.object,

    /**
     * Whether or not the dropdown should take up the entire screen-width.
     */
    fullWidth: PropTypes.bool,

    /**
     * Whether or not the menu should be rendered
     */
    isOpen: PropTypes.bool,

    /**
     * Whether or not the popout should be forced to stay on screen
     */
    keepOnScreen: PropTypes.bool,

    /**
     * The function callback to use when the menu closes
     */
    onClose: PropTypes.func,

    /**
     * The function callback for when the selection is made
     */
    onSelect: PropTypes.func,

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
    marginThreshold: PropTypes.number
  };

  static defaultProps = {
    classes: [],
    closeOnSelect: true,
    isOpen: true,
    keepOnScreen: false,
    popoverStyles: {}
  };

  componentDidUpdate(oldProps) {
    const { anchorEl, isOpen } = this.props;
    const menuDidOpen =
      (oldProps.anchorEl == null && anchorEl) || (!oldProps.isOpen && isOpen);
    if (menuDidOpen && document.activeElement) {
      document.activeElement.blur();
    }
  }

  handleSelect = (idx, event) => {
    const { onSelect } = this.props;

    if (onSelect) onSelect(idx, event);
  };

  handleSelected = (idx, event) => {
    const { closeOnSelect, onClose } = this.props;

    if (onClose && closeOnSelect) onClose(idx, event);
  };

  render() {
    const {
      anchorEl,
      anchorPosition,
      children,
      contentPosition,
      fullWidth,
      keepOnScreen,
      isOpen,
      onClose,
      popoverStyles,
      marginThreshold,
      ...other
    } = this.props;

    return (
      <React.Fragment>
        <Popover
          anchorEl={anchorEl}
          anchorPosition={anchorPosition}
          contentPosition={contentPosition}
          fullWidth={fullWidth}
          isOpen={isOpen}
          keepOnScreen={keepOnScreen}
          lockScroll={false}
          marginThreshold={marginThreshold}
          onClose={onClose}
          styles={popoverStyles}
        >
          <MenuList
            {...other}
            onSelect={this.handleSelect}
            onSelected={this.handleSelected}
          >
            {children}
          </MenuList>
        </Popover>
      </React.Fragment>
    );
  }
}

export default withClasses(Menu);

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
     * Array or string of additional CSS classes to use.
     *
     * @type {string | Array}
     */
    classes: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

    /**
     * Whether or not the menu should close when an option is chosen with a click event
     */
    closeOnClick: PropTypes.bool
  };

  static defaultProps = {
    color: "primary",
    classes: [],
    closeOnClick: true
  };

  constructor(props) {
    super(props);
    const { selectedIndex = -1 } = props;
    this.state = {
      onCloseHandler: this.closeEvent,
      activeItemIndex: selectedIndex
    };
  }

  componentDidMount() {
    const { onCloseHandler } = this.state;
    window.addEventListener("keydown", onCloseHandler);
  }

  componentDidUpdate() {
    const { anchorEl } = this.props;
    if (document.activeElement && anchorEl) {
      document.activeElement.blur();
    }
  }

  componentWillUnmount() {
    const { onCloseHandler } = this.state;
    window.removeEventListener("keydown", onCloseHandler);
  }

  handleClose = () => {
    const { onClose } = this.props;
    const { activeItemIndex } = this.state;
    this.anchorEl = null;
    if (onClose) onClose(activeItemIndex);
  };

  handleChange = (idx, event) => {
    this.setState({
      activeItemIndex: idx
    });
    const { selectChange, closeOnClick } = this.props;
    if (selectChange) selectChange(idx, event);
    if (closeOnClick && event && event.type === "click") this.handleClose(idx);
  };

  closeEvent = event => {
    const { anchorEl } = this.props;
    if (!anchorEl) return;
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleClose();
    }
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
        <Popover
          onClose={this.handleClose}
          anchorPosition={anchorPosition}
          contentPosition={contentPosition}
          lockScroll={false}
          isOpen={Boolean(anchorEl)}
          anchorEl={anchorEl}
        >
          <MenuList
            {...this.props}
            classes={className}
            selectChange={this.handleChange}
            selectedIndex={activeItemIndex}
          >
            {children}
          </MenuList>
        </Popover>
      </React.Fragment>
    );
  }
}

export default Menu;

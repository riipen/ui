import React from "react";

import PropTypes from "prop-types";

import MenuList from "./MenuList";
import MenuItem from "./MenuItem";
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
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([MenuItem])
      })
    ),

    /**
     * Array or string of additional CSS classes to use.
     *
     * @type {Array}
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
    selectedIndex: PropTypes.number
  };

  static defaultProps = {
    color: "primary",
    classes: [],
    closeOnClick: true,
    popoverStyles: {}
  };

  constructor(props) {
    super(props);
    const { selectedIndex = -1 } = props;
    this.state = {
      onCloseHandler: this.handleCloseEvent,
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
    console.log(idx, event);
    this.setState({
      activeItemIndex: idx
    });
    const { onChange, closeOnClick } = this.props;
    if (onChange) onChange(idx, event);
    if (closeOnClick && event && event.type === "click") this.handleClose(idx);
  };

  handleCloseEvent = event => {
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
      classes,
      popoverStyles
    } = this.props;
    const { activeItemIndex } = this.state;

    const className = classes.concat("menu");

    return (
      <React.Fragment>
        <Popover
          onClose={this.handleClose}
          anchorPosition={anchorPosition}
          contentPosition={contentPosition}
          lockScroll={false}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          styles={popoverStyles}
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
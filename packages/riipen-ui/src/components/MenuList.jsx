import React from "react";

import PropTypes from "prop-types";

import MenuItem from "./MenuItem";

import List from "./List";

class MenuList extends React.Component {
  static propTypes = {
    /**
     * Wether to select the first element on list open
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
     * @type {string | Array}
     */
    classes: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * The function callback when an item is selected
     */
    selectChange: PropTypes.func,

    /**
     * The selected index of the list
     */
    selectedIndex: PropTypes.number
  };

  constructor(props) {
    super(props);
    const { selectedIndex = -1 } = props;
    this.state = {
      activeItemIndex: selectedIndex,
      keyDownHandler: this.keyDownHandler
    };
  }

  componentDidMount() {
    const { autoFocus, children } = this.props;
    const { activeItemIndex, keyDownHandler } = this.state;
    window.addEventListener("keydown", keyDownHandler);
    if (autoFocus && activeItemIndex === -1) {
      this.moveFocus(children, activeItemIndex, "next");
    }
  }

  componentWillUnmount() {
    const { keyDownHandler } = this.state;
    window.removeEventListener("keydown", keyDownHandler);
  }

  getListItems(children, activeItemIndex) {
    return children.map((child, idx) => {
      let newProps = {
        onClick: this.handleClick(child, idx),
        key: idx,
        color: this.props.color
      };
      if (idx === activeItemIndex) {
        newProps = Object.assign(newProps, {
          selected: true
        });
      }
      return React.cloneElement(child, {
        ...child.props,
        ...newProps
      });
    });
  }

  handleSelectChange(idx, event) {
    this.setState({
      activeItemIndex: idx
    });
    const { selectChange } = this.props;
    if (selectChange) {
      selectChange(idx, event);
    }
  }

  keyDownHandler = event => {
    const { children } = this.props;
    const { activeItemIndex } = this.state;
    const nextEvents = ["ArrowDown", "ArrowRight"];
    const prevEvents = ["ArrowUp", "ArrowLeft"];
    const enterEvent = "Enter";
    const tabEvent = "Tab";

    const allEvents = nextEvents
      .concat(prevEvents)
      .push(enterEvent)
      .push(tabEvent);

    if (allEvents.includes(event.key)) event.preventDefault();

    if (nextEvents.includes(event.key)) {
      this.moveFocus(children, activeItemIndex, "next", event);
    } else if (prevEvents.includes(event.key)) {
      this.moveFocus(children, activeItemIndex, "prev", event);
    } else if (event.key === enterEvent) {
      this.handleSelectChange(this.state.activeItemIndex, event);
    } else if (event.key === tabEvent) {
      const direction = event.shiftkey ? "prev" : "next";
      this.moveFocus(children, activeItemIndex, direction, event);
    }
  };

  moveFocus(listItems, currIndex, direction, event) {
    let nextIndex = direction === "prev" ? currIndex - 1 : currIndex + 1;
    if (nextIndex >= listItems.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = listItems.length - 1;
    }

    const nextItem = listItems[nextIndex];
    if (!nextItem.props.disabled) {
      this.handleSelectChange(nextIndex, event);
      return;
    }
    this.moveFocus(listItems, nextIndex, direction);
    return;
  }

  handleClick = (child, idx) => {
    return event => {
      if (child.props.disabled) return;
      this.handleSelectChange(idx, event);
    };
  };

  render() {
    const { children, classes } = this.props;
    const { activeItemIndex } = this.state;

    const listItems = this.getListItems(children, activeItemIndex);

    const className = classes.concat("menu-list");

    return <List classes={className}>{listItems}</List>;
  }
}

export default MenuList;

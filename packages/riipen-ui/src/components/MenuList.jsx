import React from "react";

import PropTypes from "prop-types";

import MenuItem from "./MenuItem";

import List from "./List";

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

    /**
     *
     */
    autoFocus: PropTypes.bool,

    /**
     *
     */
    listRef: PropTypes.any,

    /**
     *
     */
    childRefs: PropTypes.object
  };

  static defaultProps = {
    listRef: React.createRef(),
    childRefs: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: -1,
      keyDownHandler: this.keyDownHandler
    };
  }

  componentDidMount() {
    const { autoFocus, children, listRef } = this.props;
    const { activeItemIndex } = this.state;
    if (autoFocus && activeItemIndex === -1) {
      this.moveFocus(listRef, children, activeItemIndex, "next");
    }
    window.addEventListener("keydown", this.state.keyDownHandler);
  }

  componentWillUnmount() {
    window.addEventListener("keydown", this.state.keyDownHandler);
  }

  getOrCreateRef = id => {
    const { childRefs } = this.props;
    if (!Object.prototype.hasOwnProperty.call(childRefs, id)) {
      childRefs[id] = React.createRef();
    }
    return childRefs[id];
  };

  getListItems(children, activeItemIndex) {
    return children.map((child, idx) => {
      let newProps = { key: idx };
      if (idx === activeItemIndex) {
        newProps = Object.assign(newProps, {
          autoFocus: true,
          tabIndex: 0
        });
      }
      return React.cloneElement(child, {
        ref: this.getOrCreateRef(idx),
        ...newProps,
        ...child.props
      });
    });
  }

  keyDownHandler = event => {
    const { children } = this.props;
    const { activeItemIndex, ref } = this.state;
    const nextEvents = ["ArrowDown", "ArrowRight"];
    const prevEvents = ["ArrowUp", "ArrowLeft"];

    if (nextEvents.includes(event.key)) {
      this.moveFocus(ref, children, activeItemIndex, "next");
    } else if (prevEvents.includes(event.key)) {
      this.moveFocus(ref, children, activeItemIndex, "prev");
    }
  };

  moveFocus(list, listItems, currIndex, direction) {
    console.log(list, listItems, currIndex, direction);
    /*
    let nextIndex = direction === "prev" ? currIndex - 1 : currIndex + 1;
    if (nextIndex >= listItems.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = listItems.length - 1;
    }

    const nextItem = listItems[nextIndex];
    if (!nextItem.disabled) {
      console.log(nextItem);
      this.setState({
        activeItemIndex: nextIndex
      });
      return;
    }
    this.moveFocus(listItems, nextIndex, direction);
    return;
    */
  }

  render() {
    const { children } = this.props;
    const { activeItemIndex } = this.state;

    const listItems = this.getListItems(children, activeItemIndex);

    return (
      <React.Fragment>
        <List className="root" ref={this.props.listRef}>
          {listItems}
        </List>
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

export default MenuList;

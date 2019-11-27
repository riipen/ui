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
    autoFocus: PropTypes.bool

    /**
     *
     */
  };

  constructor(props) {
    super(props);
    this.state = {
      ref: React.createRef(),
      activeItemIndex: -1,
      keyDownHandler: this.keyDownHandler
    };
  }

  componentDidMount() {
    const { autoFocus, children } = this.props;
    const { activeItemIndex, ref } = this.state;
    console.log(autoFocus, activeItemIndex);
    if (autoFocus && activeItemIndex === -1) {
      this.moveFocus(ref, children, activeItemIndex, "next");
    }
    window.addEventListener("keydown", this.state.keyDownHandler);
  }

  componentWillUnmount() {
    window.addEventListener("keydown", this.state.keyDownHandler);
  }

  getListItems(children, activeItemIndex) {
    return children.map((child, i) => {
      if (child.props.autoFocus && !child.props.disabled) {
        this.setState({
          activeItemIndex: i
        });
      }

      let newProps = { key: i };
      if (i === activeItemIndex) {
        newProps = Object.assign(newProps, {
          autoFocus: true,
          tabIndex: 0
        });
      }
      return React.cloneElement(child, {
        ...newProps,
        ...child.props
      });
    });
  }

  setRef = element => {
    this.setState({
      ref: element
    });
    console.log(element);
  };

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
    console.log(event);
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
    console.log("render");
    const { children } = this.props;
    const { activeItemIndex } = this.state;

    const listItems = this.getListItems(children, activeItemIndex);

    return (
      <React.Fragment>
        <List className="root" ref={this.state.ref}>
          {listItems}
        </List>
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

export default MenuList;

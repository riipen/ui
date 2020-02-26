import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class MenuList extends React.Component {
  static propTypes = {
    /**
     * Wether to select the first element on list open
     */
    autoFocus: PropTypes.bool,

    /**
     * The content of the component.
     */
    children: PropTypes.array,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

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
    selectedIndex: PropTypes.number,

    /**
     * The type of menu to create
     * Use 'menu' for lists of links
     */
    variant: PropTypes.oneOf(["menu", "selection"])
  };

  static defaultProps = {
    selectedIndex: -1,
    variant: "menu"
  };

  constructor(props) {
    super(props);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  componentDidMount() {
    const { autoFocus, children, selectedIndex } = this.props;
    window.addEventListener("keydown", this.keyDownHandler);
    if (autoFocus && selectedIndex === -1) {
      this.moveFocus(children, selectedIndex, "next");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
  }

  getListItems(children, activeItemIndex) {
    const { variant } = this.props;

    return children.map((child, idx) => {
      let newProps = {
        key: idx,
        color: this.props.color
      };
      if (variant === "selection") {
        newProps = Object.assign(newProps, {
          onClick: this.handleClick(child, idx)
        });
        if (idx === activeItemIndex) {
          newProps = Object.assign(newProps, {
            selected: true
          });
        }
      }
      return React.cloneElement(child, {
        ...child.props,
        ...newProps
      });
    });
  }

  static contextType = ThemeContext;

  handleSelectChange(idx, event) {
    const { selectChange } = this.props;
    if (selectChange) {
      selectChange(idx, event);
    }
  }

  keyDownHandler = event => {
    const { children, selectedIndex } = this.props;
    const nextEvents = ["ArrowDown", "ArrowRight"];
    const prevEvents = ["ArrowUp", "ArrowLeft"];
    const enterEvent = "Enter";
    const tabEvent = "Tab";

    const allEvents = nextEvents
      .concat(prevEvents)
      .concat(enterEvent)
      .concat(tabEvent);

    if (allEvents.includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (nextEvents.includes(event.key)) {
      this.moveFocus(children, selectedIndex, "next", event);
    } else if (prevEvents.includes(event.key)) {
      this.moveFocus(children, selectedIndex, "prev", event);
    } else if (event.key === enterEvent) {
      this.handleSelectChange(selectedIndex, event);
    } else if (event.key === tabEvent) {
      const direction = event.shiftkey ? "prev" : "next";
      this.moveFocus(children, selectedIndex, direction, event);
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
    const { children, classes, selectedIndex } = this.props;

    return (
      <React.Fragment>
        <div className={clsx(classes)}>
          {this.getListItems(children, selectedIndex)}
        </div>
      </React.Fragment>
    );
  }
}

export default withClasses()(MenuList);

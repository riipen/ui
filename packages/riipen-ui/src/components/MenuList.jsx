import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import withClasses from "../utils/withClasses";

class MenuList extends React.Component {
  static displayName = "MenuList";

  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * The function callback when an item is selected.
     */
    onSelect: PropTypes.func,

    /**
     * The function callback after an item is selected.
     */
    onSelected: PropTypes.func,

    /**
     * The selected index of the list
     */
    selectedIndex: PropTypes.number
  };

  static defaultProps = {
    selectedIndex: -1
  };

  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { children, selectedIndex } = this.props;

    const nextEvents = ["ArrowDown", "ArrowRight"];
    const prevEvents = ["ArrowUp", "ArrowLeft"];

    const allEvents = [...nextEvents, ...prevEvents];

    if (allEvents.includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (nextEvents.includes(event.key)) {
      this.moveFocus(children, selectedIndex, "next", event);
    } else if (prevEvents.includes(event.key)) {
      this.moveFocus(children, selectedIndex, "prev", event);
    }
  };

  handleSelect = index => event => {
    const { onSelect } = this.props;

    onSelect(index, event);
  };

  moveFocus = direction => {
    const { children } = this.props;

    const currentIndex = Object.values(this.list.children).indexOf(
      document.activeElement
    );

    let nextIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex >= children.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = children.length - 1;
    }

    return this.list.children[nextIndex]?.focus();
  };

  renderChildren() {
    const { children, onSelect, onSelected, selectedIndex } = this.props;

    return React.Children.map(
      children.type === React.Fragment ? children.props.children : children,
      (child, index) => {
        if (!child) return null;

        const newProps = {
          key: index,
          color: this.props.color,
          onSelected,
          selected: index === selectedIndex
        };

        if (onSelect) {
          newProps.onSelect = this.handleSelect(index);
        }

        return React.cloneElement(child, {
          ...newProps,
          ...child.props
        });
      }
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={clsx(classes)} ref={ref => (this.list = ref)}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default withClasses(MenuList);

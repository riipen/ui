import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

class Tabs extends React.Component {
  static displayName = "Tabs";

  static propTypes = {
    /**
     * The breakpoint to display the mobile tab styling. Use "none" for no styling.
     */
    breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl", "none"]),

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * Determines the color of the indicator.
     */
    color: PropTypes.oneOf(["secondary", "primary"]),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.elementType,

    /**
     * Spacing to apply to letters to the Tab.
     */
    letterSpacing: PropTypes.number,

    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {any} value The value of the tab.
     */
    onChange: PropTypes.func,

    /**
     * The tabs orientation (layout flow direction).
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * Set the text-transform on the tabs.
     */
    textTransform: PropTypes.oneOf([
      "inherit",
      "capitalize",
      "uppercase",
      "lowercase"
    ]),

    /**
     * The value of the currently selected `Tab`.
     */
    value: PropTypes.any,

    /**
     *  Determines additional display behavior of the tabs:
     *
     *  - `standard` will render the default state.
     *  -`fullWidth` will make the tabs grow to use all the available space,
     *  which should be used for small views, like on mobile.
     */
    variant: PropTypes.oneOf(["standard", "fullWidth"])
  };

  static defaultProps = {
    breakpoint: "sm",
    color: "secondary",
    component: "div",
    orientation: "horizontal",
    textTransform: "uppercase",
    variant: "standard"
  };

  handleChange = (e, value) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e, value);
    }
  };

  render() {
    const {
      breakpoint,
      children,
      classes,
      color,
      component: Component,
      letterSpacing,
      orientation,
      textTransform,
      value,
      variant
    } = this.props;

    const className = clsx("root", orientation, classes);

    const childrenWithProps = React.Children.map(children, child => {
      if (!child) return null;

      const active = child.props.active || child.props.value === value;

      return React.cloneElement(child, {
        active,
        breakpoint,
        color,
        fullWidth: variant === "fullWidth",
        letterSpacing,
        onClick: this.handleChange,
        orientation,
        textTransform
      });
    });

    return (
      <>
        <Component role="tablist" className={className}>
          <div className={clsx("scroller")}>
            <div className={clsx(orientation)}>{childrenWithProps}</div>
          </div>
        </Component>
        <style jsx>{`
          .root {
            display: flex;
            min-height: 48px;
            overflow: hidden;
          }

          .vertical {
            display: flex;
            flex-direction: column;
          }

          .scroller {
            display: inline-block;
            flex: 1 1 auto;
            overflow-x: auto;
            position: relative;
            white-space: nowrap;
          }
        `}</style>
      </>
    );
  }
}

export default withClasses(Tabs);

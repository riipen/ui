import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

class List extends React.Component {
  static displayName = "List";

  static propTypes = {
    /**
     * The content of the list.
     */
    children: PropTypes.node,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

    /**
     * Additional spacing based in theme spacing multiplier to apply after each list item.
     */
    spacing: PropTypes.number,

    /**
     * The orientation variant to display each list item as.
     */
    variant: PropTypes.oneOf(["horizontal", "vertical"])
  };

  static defaultProps = {
    classes: []
  };

  render() {
    const { classes, children, spacing, variant } = this.props;

    const className = clsx("list", classes);

    const childrenWithProps = React.Children.map(children, child => {
      if (!child) return null;

      return React.cloneElement(child, {
        spacing: child.props.spacing || spacing,
        variant: child.props.variant || variant
      });
    });

    return (
      <React.Fragment>
        <ul className={className}>{childrenWithProps}</ul>
        <style jsx>{`
          .list {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(List);

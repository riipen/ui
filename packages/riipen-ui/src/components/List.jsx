import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

class List extends React.Component {
  static propTypes = {
    /**
     * The content of the list.
     */
    children: PropTypes.node,

    /**
     * Array or string of additional CSS classes to use.
     *
     * @type {string | Array}
     */
    classes: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  };

  static defaultProps = {
    classes: []
  };

  handleClick = (child, idx) => {
    return () => {
      if (child.disabled) return;
      this.setState({
        activeItemIndex: idx
      });
    };
  };

  render() {
    const { classes, children } = this.props;

    const className = clsx(classes, "list");

    return (
      <React.Fragment>
        <ul className={className}>
          {children.map((child, idx) => {
            return React.cloneElement(child, {
              onClick: this.handleClick(child, idx),
              key: `${idx}`,
              ...child.props
            });
          })}
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default List;

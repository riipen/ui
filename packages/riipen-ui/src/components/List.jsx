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
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array,

    listRef: PropTypes.any,

    childRefs: PropTypes.object
  };

  static defaultProps = {
    classes: [],
    listRef: React.createRef(),
    childRefs: {}
  };

  getOrCreateRef = id => {
    const { childRefs } = this.props;
    if (!Object.prototype.hasOwnProperty.call(childRefs, id)) {
      childRefs[id] = React.createRef();
    }
    return childRefs[id];
  };

  render() {
    const { classes, children } = this.props;

    console.log(this.props);

    const className = clsx(classes);

    const onClick = () => {
      console.log(this.props);
    };

    return (
      <React.Fragment>
        <ul onClick={onClick} ref={this.props.listRef} className={className}>
          {children.map((child, idx) => {
            return React.cloneElement(child, {
              listItemRef: this.getOrCreateRef(idx),
              key: idx
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

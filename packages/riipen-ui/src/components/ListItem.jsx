import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

class ListItem extends React.Component {
  static propTypes = {
    /**
     * The content of the list item.
     */
    children: PropTypes.any,

    /**
     * Array of additional CSS classes to use.
     *
     * @type {Array}
     */
    classes: PropTypes.array
  };

  static defaultProps = {
    classes: []
  };

  render() {
    const { children, classes } = this.props;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <li className={className}>{children}</li>
        <style jsx>{`
          li {
            list-style-type: none;
            margin: 0;
            padding: 8px 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default ListItem;

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import withClasses from "../utils/withClasses";

class List extends React.Component {
  static propTypes = {
    /**
     * The content of the list.
     */
    children: PropTypes.node,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array
  };

  static defaultProps = {
    classes: []
  };

  render() {
    const { classes, children } = this.props;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <ul className={className}>{children}</ul>
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

export default withClasses()(List);

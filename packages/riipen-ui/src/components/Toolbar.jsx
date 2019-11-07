import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

class Toolbar extends React.Component {
  static propTypes = {
    /**
     * The content of the toolbar.
     */
    children: PropTypes.node,

    /**
     * List of additional classes to apply to this component.
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
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            align-items: center;
            display: flex;
            position: relative;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Toolbar;

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

class Backdrop extends React.Component {
  static displayName = "Backdrop";

  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * If `true`, the backdrop is open.
     */
    open: PropTypes.bool.isRequired
  };

  static defaultProps = {
    open: false
  };

  render() {
    const { children, classes, open, ...other } = this.props;

    const className = clsx("root", open, classes);

    return (
      <React.Fragment>
        <div className={className} aria-hidden {...other}>
          {children}
        </div>
        <style jsx>{`
          .root {
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            bottom: 0;
            display: flex;
            justify-content: center;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Backdrop);

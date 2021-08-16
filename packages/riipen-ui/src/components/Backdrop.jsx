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
    classes: PropTypes.array
  };

  render() {
    const { children, classes, ...other } = this.props;

    const className = clsx("root", classes);

    return (
      <>
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
      </>
    );
  }
}

export default withClasses(Backdrop);

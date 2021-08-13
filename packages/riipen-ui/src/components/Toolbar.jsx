import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

class Toolbar extends React.Component {
  static displayName = "Toolbar";

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
      <>
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            align-items: center;
            display: flex;
            position: relative;
          }
        `}</style>
      </>
    );
  }
}

export default withClasses(Toolbar);

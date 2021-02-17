import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class ClickAway extends React.Component {
  static displayName = "ClickAway";

  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     */
    onClickAway: PropTypes.func.isRequired
  };

  static contextType = ThemeContext;

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  handleClickAway = e => {
    const { onClickAway } = this.props;

    onClickAway(e);
  };

  render() {
    const { children } = this.props;

    const theme = this.context;

    const childrenWithProps = React.Children.map(children, child => {
      if (!child) return null;

      return React.cloneElement(child, { onClick: this.handleClick });
    });

    return (
      <React.Fragment>
        <div onClick={this.handleClickAway}>{childrenWithProps}</div>
        <style jsx>{`
          div {
            bottom: 0;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
            z-index: ${theme.zIndex.middle};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(ClickAway);

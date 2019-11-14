import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Backdrop from "./Backdrop";
import ClickAway from "./ClickAway";

class Drawer extends React.Component {
  static propTypes = {
    /**
     * Side from which the drawer will appear.
     */
    anchor: PropTypes.oneOf(["left", "top", "right", "bottom"]),

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     */
    onClose: PropTypes.func,

    /**
     * If `true`, the drawer is open.
     */
    open: PropTypes.bool.isRequired
  };

  static defaultProps = {
    anchor: "left",
    open: false
  };

  static contextType = ThemeContext;

  render() {
    const { anchor, children, classes, onClose, open } = this.props;

    if (!open) return null;

    const theme = this.context;

    const className = clsx("drawer", anchor, classes);

    return (
      <React.Fragment>
        <Backdrop />
        <ClickAway onClickAway={onClose}>
          <div className={className}>{children}</div>
        </ClickAway>
        <style jsx>{`
          .drawer {
            background-color: ${theme.palette.common.white};
            display: flex;
            flex-direction: column;
            flex: 1 0 auto;
            height: 100%;
            overflow-y: auto;
            position: fixed;
            top: 0;
            z-index: ${theme.zIndex.middle};
          }

          .left {
            left: 0;
            right: auto;
          }
          .right {
            left: auto;
            right: 0;
          }
          .top {
            top: 0;
            left: 0;
            bottom: auto;
            right: 0;
            height: auto;
            max-height: 100%;
          }
          .bottom {
            top: auto;
            left: 0;
            bottom: 0;
            right: 0;
            height: auto;
            max-height: 100%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Drawer;

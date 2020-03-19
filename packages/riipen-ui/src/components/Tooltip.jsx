import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import withClasses from "../utils/withClasses";

import Popover from "./Popover";

class Tooltip extends React.Component {
  static propTypes = {
    /**
     * The content to trigger the tooltip with.
     */
    children: PropTypes.node,

    /**
     * Any additional classes to apply.
     */
    classes: PropTypes.array,

    /**
     * Color of tooltip.
     */
    color: PropTypes.oneOf([
      "default",
      "white",
      "positive",
      "negative",
      "warning"
    ]),

    /**
     * Whether tooltip should display on click.
     */
    click: PropTypes.bool,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.elementType,

    /**
     * The location to attach the anchor to on the content element.
     * Also used to determine the tooltip arrow placement/direction.
     */
    contentPosition: PropTypes.object,

    /**
     * Whether tooltip should display on hover.
     */
    hover: PropTypes.bool,

    /**
     * Function to call on tooltip close.
     */
    onClose: PropTypes.func,

    /**
     * Function to call on tooltip open.
     */
    onOpen: PropTypes.func,

    /**
     * The tooltip content to display.
     */
    tooltip: PropTypes.node
  };

  static defaultProps = {
    classes: [],
    click: false,
    color: "default",
    component: "div",
    contentPosition: { vertical: "bottom", horizontal: "left" },
    hover: true
  };

  constructor() {
    super();
    this.tooltipRootRef = React.createRef();
    this.state = {
      open: false
    };
  }

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      .container {
        padding: ${theme.spacing(4)}px;
      }

      .wrapper {
        height: max-content;
        width: max-content;
      }

      /* Colors */

      .popover.default {
        --after-color: ${theme.palette.grey[600]};

        --before-color: ${theme.palette.grey[600]};

        background: ${theme.palette.grey[600]};
        border: 1px solid ${theme.palette.grey[600]};
      }

      .popover.negative {
        --after-color: ${theme.palette.negative.main};

        --before-color: ${theme.palette.negative.main};

        background: ${theme.palette.negative.main};
        border: 1px solid ${theme.palette.negative.main};
      }

      .popover.positive {
        --after-color: ${theme.palette.positive.main};

        --before-color: ${theme.palette.positive.main};

        background: ${theme.palette.positive.main};
        border: 1px solid ${theme.palette.positive.main};
      }

      .popover.warning {
        --after-color: ${theme.palette.warning.main};

        --before-color: ${theme.palette.warning.main};

        background: ${theme.palette.warning.main};
        border: 1px solid ${theme.palette.warning.main};
      }

      .popover.white {
        --after-color: ${theme.palette.common.white};

        --before-color: ${theme.palette.grey[400]};

        background: ${theme.palette.common.white};
        border: 1px solid ${theme.palette.grey[400]};
      }

      /* Positions */

      /* Tooltip arrow border */
      .popover::before {
        border-color: transparent;
        border-style: solid;
        border-width: ${theme.spacing(2)}px;
        content: "";
        position: absolute;
      }

      /* Tooltip arrow inside */
      .popover::after {
        border-color: transparent;
        border-style: solid;
        border-width: calc(${theme.spacing(2)}px - 1px);
        content: "";
        position: absolute;
      }

      .popover.top {
        margin-top: ${theme.spacing(2)}px;
      }

      .popover.top::before {
        margin-top: ${theme.spacing(-4)}px;
        top: 0;
      }

      .popover.top::after {
        margin-top: -17px;
        top: 0;
      }

      .popover.top-left {
        border-top-left-radius: 0;
      }

      /* Tooltip arrow */
      .popover.top-left::before {
        border-bottom-color: var(--before-color);
        border-left: none;
        left: 0;
        margin-left: -1px;
      }

      .popover.top-left::after {
        border-bottom-color: var(--after-color);
        border-left: none;
        left: 0;
      }

      .popover.top-center::before {
        border-bottom-color: var(--before-color);
        left: calc(50% - (${theme.spacing(2)}px));
      }

      .popover.top-center::after {
        border-bottom-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        left: calc(50% - ${theme.spacing(2)}px);
        margin-top: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.top-right {
        border-top-right-radius: 0;
      }

      .popover.top-right::before {
        border-bottom-color: var(--before-color);
        border-right: none;
        margin-right: -1px;
        right: 0;
      }

      .popover.top-right::after {
        border-bottom-color: var(--after-color);
        border-right: none;
        right: 0;
      }

      .popover.center::before {
        top: calc(50% - ${theme.spacing(2)}px);
      }

      .popover.center::after {
        top: calc(50% - ${theme.spacing(2)}px);
      }

      .popover.center-left {
        margin-left: ${theme.spacing(3)}px;
      }

      .popover.center-left::before {
        border-right-color: var(--before-color);
        left: 0;
        margin-left: ${theme.spacing(-4)}px;
      }

      .popover.center-left::after {
        border-right-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        left: 0;
        margin-left: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.center-right {
        margin-left: ${theme.spacing(-3)}px;
      }

      .popover.center-right::before {
        border-left-color: var(--before-color);
        margin-right: ${theme.spacing(-4)}px;
        right: 0;
      }

      .popover.center-right::after {
        border-left-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        margin-right: calc(${theme.spacing(-4)}px + 1px);
        right: 0;
      }

      .popover.bottom {
        margin-top: ${theme.spacing(-2)}px;
      }

      .popover.bottom::before {
        bottom: 0;
        margin-bottom: ${theme.spacing(-4)}px;
      }

      .popover.bottom::after {
        bottom: 0;
        margin-bottom: -17px;
      }

      .popover.bottom-left {
        border-bottom-left-radius: 0;
      }

      .popover.bottom-left::before {
        border-left: none;
        border-top-color: var(--before-color);
        left: 0;
        margin-left: -1px;
      }

      .popover.bottom-left::after {
        border-left: none;
        border-top-color: var(--after-color);
        left: 0;
      }

      .popover.bottom-center::before {
        border-top-color: var(--before-color);
        left: calc(50% - ${theme.spacing(2)}px);
      }

      .popover.bottom-center::after {
        border-top-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        left: calc(50% - ${theme.spacing(2)}px);
        margin-bottom: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.bottom-right {
        border-bottom-right-radius: 0;
      }

      .popover.bottom-right::before {
        border-right: none;
        border-top-color: var(--before-color);
        border-width: ${theme.spacing(2)}px;
        margin-right: -1px;
        right: 0;
      }

      .popover.bottom-right::after {
        border-right: none;
        border-top-color: var(--after-color);
        right: 0;
      }
    `;
  };

  blur = () => {
    // Unfocus if it is still active
    const activeElement = document.activeElement;
    if (activeElement) {
      activeElement.blur();
    }
  };

  buttonCallback = () => {
    const { open } = this.state;

    const callback = !open ? this.props.onOpen : this.props.onClose;
    this.blur();
    this.setState(
      {
        open: !open
      },
      callback
    );
  };

  static contextType = ThemeContext;

  handleOpen = () => {
    this.setState({ open: true }, this.props.onOpen);
  };

  handleClose = () => {
    this.blur();
    this.setState(
      {
        open: false
      },
      this.props.onClose
    );
  };

  renderPopover = () => {
    const { contentPosition, classes, color, tooltip, ...other } = this.props;
    const { open } = this.state;

    const linkedStyles = this.getLinkedStyles();

    return (
      open && (
        <Popover
          {...other}
          classes={classes.concat([
            linkedStyles.className,
            "popover",
            color,
            contentPosition.vertical,
            `${contentPosition.vertical}-${contentPosition.horizontal}`
          ])}
          contentPosition={contentPosition}
          anchorEl={this.tooltipRootRef.current}
          open={open}
          keepOnScreen={false}
          lockScroll={false}
          onClose={this.handleClose}
        >
          <div className={clsx(linkedStyles.className, "container")}>
            {tooltip}
          </div>
        </Popover>
      )
    );
  };
  render() {
    const { children, click, hover, component: Component } = this.props;

    const linkedStyles = this.getLinkedStyles();

    return (
      <React.Fragment>
        <Component
          className={clsx(linkedStyles.className, "wrapper")}
          ref={this.tooltipRootRef}
          onClick={click ? this.buttonCallback : undefined}
          onMouseOver={hover ? this.handleOpen : undefined}
          onMouseOut={hover ? this.handleClose : undefined}
        >
          {children}
        </Component>
        {this.renderPopover()}
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default withClasses(Tooltip);

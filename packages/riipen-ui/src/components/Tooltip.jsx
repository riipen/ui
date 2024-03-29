import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import withClasses from "../utils/withClasses";

import Popover from "./Popover";

/**
 * Gets the opposing direction of direction1 and direction2.
 * @param {string} direction1 - first direction
 * @param {string} direction2 - opposing direction of direction1
 * @param {string} value - value to compare
 * @returns {string} Opposing direciton, or just value if directions do not oppose.
 */
const getOppositeDirection = (direction, oppositeDirection, value) => {
  if (value === direction) {
    return oppositeDirection;
  } else if (value === oppositeDirection) {
    return direction;
  }
  return value;
};

const Tooltip = ({
  children,
  classes,
  click,
  color,
  component: Component,
  hover,
  isControlledByProps,
  keepOpenOnMouseLeave,
  onClose,
  onKeyDown,
  onOpen,
  open,
  position,
  size,
  tooltip,
  ...other
}) => {
  const theme = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(isControlledByProps ? open : false);
  const tooltipRootRef = useRef(null);

  useEffect(() => {
    if (isControlledByProps) {
      setIsOpen(open);
    }
  }, [isControlledByProps, open]);

  const getLinkedStyles = () => {
    return css.resolve`
      .popover {
        border-radius: 2px;
        color: ${theme.palette.common.white};
      }

      @keyframes fade {
        from {
          opacity: 0;
        }

        to: {
          opacity: 1;
        }
      }

      .popover.show {
        animation: fade ${theme.transitions.duration.short}ms
          ${theme.transitions.easing.easeIn};
      }

      /* Sizes */

      .popover.small {
        padding: ${theme.spacing(1)}px ${theme.spacing(4)}px;
      }

      .popover.medium {
        padding: ${theme.spacing(4)}px;
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

        --before-color: ${theme.palette.grey[300]};

        background: ${theme.palette.common.white};
        border: 1px solid ${theme.palette.grey[300]};
        color: ${theme.palette.text.primary};
      }

      /* Positions */

      /* Tooltip arrow border */
      .popover::before {
        border-color: transparent;
        border-style: solid;
        border-width: ${theme.spacing(2)}px;
        content: "";
        position: absolute;
        white-space: normal;
      }

      /* Tooltip arrow inside */
      .popover::after {
        border-color: transparent;
        border-style: solid;
        border-width: calc(${theme.spacing(2)}px - 1px);
        content: "";
        position: absolute;
        white-space: normal;
      }

      .popover.bottom {
        margin-top: ${theme.spacing(3)}px;
      }

      .popover.bottom::before {
        margin-top: ${theme.spacing(-4)}px;
        top: 0;
      }

      .popover.bottom::after {
        margin-top: -17px;
        top: 0;
      }

      .popover.bottom-right {
        border-top-left-radius: 0;
      }

      /* Tooltip arrow */
      .popover.bottom-right::before {
        border-bottom-color: var(--before-color);
        border-left: none;
        left: 0;
        margin-left: -1px;
      }

      .popover.bottom-right::after {
        border-bottom-color: var(--after-color);
        border-left: none;
        border-width: ${theme.spacing(2)}px;
        left: 0;
        margin-top: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.bottom-center::before {
        border-bottom-color: var(--before-color);
        left: calc(50% - (${theme.spacing(2)}px));
      }

      .popover.bottom-center::after {
        border-bottom-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        left: calc(50% - ${theme.spacing(2)}px);
        margin-top: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.bottom-left {
        border-top-right-radius: 0;
      }

      .popover.bottom-left::before {
        border-bottom-color: var(--before-color);
        border-right: none;
        margin-right: -1px;
        right: 0;
      }

      .popover.bottom-left::after {
        border-bottom-color: var(--after-color);
        border-right: none;
        border-width: ${theme.spacing(2)}px;
        margin-top: calc(${theme.spacing(-4)}px + 1px);
        right: 0;
      }

      .popover.center::before {
        top: calc(50% - ${theme.spacing(2)}px);
      }

      .popover.center::after {
        top: calc(50% - ${theme.spacing(2)}px);
      }

      .popover.center-right {
        margin-left: ${theme.spacing(3)}px;
      }

      .popover.center-right::before {
        border-right-color: var(--before-color);
        left: 0;
        margin-left: ${theme.spacing(-4)}px;
      }

      .popover.center-right::after {
        border-right-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        left: 0;
        margin-left: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.center-left {
        margin-left: ${theme.spacing(-3)}px;
      }

      .popover.center-left::before {
        border-left-color: var(--before-color);
        margin-right: ${theme.spacing(-4)}px;
        right: 0;
      }

      .popover.center-left::after {
        border-left-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        margin-right: calc(${theme.spacing(-4)}px + 1px);
        right: 0;
      }

      .popover.top {
        margin-top: ${theme.spacing(-3)}px;
      }

      .popover.top::before {
        bottom: 0;
        margin-bottom: ${theme.spacing(-4)}px;
      }

      .popover.top::after {
        bottom: 0;
        margin-bottom: -17px;
      }

      .popover.top-right {
        border-bottom-left-radius: 0;
      }

      .popover.top-right::before {
        border-left: none;
        border-top-color: var(--before-color);
        left: 0;
        margin-left: -1px;
      }

      .popover.top-right::after {
        border-left: none;
        border-top-color: var(--after-color);
        left: 0;
      }

      .popover.top-center::before {
        border-top-color: var(--before-color);
        left: calc(50% - ${theme.spacing(2)}px);
      }

      .popover.top-center::after {
        border-top-color: var(--after-color);
        border-width: ${theme.spacing(2)}px;
        left: calc(50% - ${theme.spacing(2)}px);
        margin-bottom: calc(${theme.spacing(-4)}px + 1px);
      }

      .popover.top-left {
        border-bottom-right-radius: 0;
      }

      .popover.top-left::before {
        border-right: none;
        border-top-color: var(--before-color);
        border-width: ${theme.spacing(2)}px;
        margin-right: -1px;
        right: 0;
      }

      .popover.top-left::after {
        border-right: none;
        border-top-color: var(--after-color);
        right: 0;
      }
    `;
  };

  const handleOpen = () => {
    if (!isControlledByProps) setIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };

  const handleClose = () => {
    if (!isControlledByProps) setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const clickCallback = () => (isOpen ? handleClose() : handleOpen());

  const [vertical, horizontal] = position.split("-");
  const contentPosition = {
    horizontal: getOppositeDirection("left", "right", horizontal),
    vertical: getOppositeDirection("top", "bottom", vertical)
  };
  const linkedStyles = getLinkedStyles();

  return (
    <>
      <Component
        ref={tooltipRootRef}
        onClick={click ? clickCallback : undefined}
        onMouseEnter={hover ? handleOpen : null}
        onMouseLeave={hover && !keepOpenOnMouseLeave ? handleClose : null}
      >
        {children}
      </Component>
      {
        <Popover
          classes={classes.concat([
            linkedStyles.className,
            "popover",
            color,
            position,
            vertical,
            size,
            isOpen && "show"
          ])}
          anchorPosition={{
            horizontal,
            vertical
          }}
          contentPosition={contentPosition}
          onKeyDown={onKeyDown}
          anchorEl={tooltipRootRef.current}
          isOpen={isOpen}
          keepOnScreen
          lockScroll={false}
          onClose={handleClose}
          {...other}
        >
          {tooltip}
        </Popover>
      }
      {linkedStyles.styles}
    </>
  );
};

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
  /**
   * The content to trigger the tooltip with.
   */
  children: PropTypes.node,

  /**
   * Any additional classes to apply.
   */
  classes: PropTypes.array,

  /**
   * Whether tooltip should display on click.
   */
  click: PropTypes.bool,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Whether tooltip should display on hover.
   */
  hover: PropTypes.bool,

  /**
   * How the open/close state will be determined:
   * [Default] false: by this component's state,
   * true: by this component's props.
   */
  isControlledByProps: PropTypes.bool,

  /**
   * Whether the popover should stay open after leaving the content.
   */
  keepOpenOnMouseLeave: PropTypes.bool,

  /**
   * Function to call on tooltip close.
   */
  onClose: PropTypes.func,

  /**
   * Function to call on tooltip keydown.
   */
  onKeyDown: PropTypes.func,

  /**
   * Function to call on tooltip open.
   */
  onOpen: PropTypes.func,

  /**
   * Whether the popover should be open/shown.
   * Only used when props.isControlledByProps is true
   * [Default] false
   */
  open: PropTypes.bool,

  /**
   * Where to display the tooltip in relation to element.
   */
  position: PropTypes.oneOf([
    "top-right",
    "top-center",
    "top-left",
    "center-right",
    "center-left",
    "bottom-right",
    "bottom-center",
    "bottom-left"
  ]),

  /**
   * The size of the tooltip.
   */
  size: PropTypes.oneOf(["small", "medium"]),

  /**
   * The tooltip content to display.
   */
  tooltip: PropTypes.node
};

Tooltip.defaultProps = {
  classes: [],
  click: false,
  color: "default",
  component: "div",
  hover: true,
  isControlledByProps: false,
  open: false,
  keepOpenOnMouseLeave: false,
  position: "bottom-center",
  size: "small"
};

export default withClasses(Tooltip);

import clsx from "clsx";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";

import {
  getContainer,
  getDocument,
  getOffsetLeft,
  getOffsetTop,
  getClosestScrollableParent,
  debounce
} from "../utils";
import withClasses from "../utils/withClasses";

<<<<<<< HEAD
const getAnchorEl = anchorEl =>
  typeof anchorEl === "function" ? anchorEl() : anchorEl;

=======
>>>>>>> Fix typo
const isDescendant = (parent, child) => {
  const node = child.parentNode;
  if (node == null) {
    return false;
  } else if (node === parent) {
    return true;
  }
  return isDescendant(parent, node);
};

const Popover = ({
  anchorPosition,
  anchorEl,
  classes,
  children,
  closeOnScrolled,
  component: Component,
  contentPosition,
  fullWidth,
  isOpen,
  keepOnScreen,
  lockScroll,
  marginThreshold,
  onClose,
  onKeyDown,
  styles
}) => {
  const theme = React.useContext(ThemeContext);
  const contentRef = useRef(null);
  const [contentStyles, setContentStyles] = useState({
    top: 0,
    left: 0,
    visibility: "hidden"
  });
  const [currentAnchorEl, setCurrentAnchorEl] = useState(getAnchorEl(anchorEl));
  const [scrollContainer, setScrollContainer] = useState(null);
  const [scrollContainerStyle, setScrollContainerStyle] = useState(null);

  const setPositioningStyle = () => {
    if (!currentAnchorEl || !contentRef.current) return;

    // Set top and left of element based on location of anchor
    const anchorRect = currentAnchorEl.getBoundingClientRect();
    let top = anchorRect.top;
    let left = anchorRect.left;

    // Offset Content Based on anchorPosition props
    const anchorVerticalOffset = getOffsetTop(
      anchorRect,
      anchorPosition.vertical
    );
    const anchorHorizonalOffset = getOffsetLeft(
      anchorRect,
      anchorPosition.horizontal
    );

    top += anchorVerticalOffset;
    left += anchorHorizonalOffset;

    // Offset Content Based on contentPosition props
    const contentRect = contentRef.current.getBoundingClientRect();

    const contentVerticalOffset = getOffsetTop(
      contentRect,
      contentPosition.vertical
    );
    const contentHorizontalOffset = getOffsetLeft(
      contentRect,
      contentPosition.horizontal
    );

    top -= contentVerticalOffset;
    left -= contentHorizontalOffset;

    // Move menu back into view if out of screen
    if (keepOnScreen) {
      const viewContainer = getContainer(anchorEl);

      const heightMax = viewContainer.innerHeight - marginThreshold;
      const widthMax = viewContainer.innerWidth - marginThreshold;

      // Check Vertical Constraints
      if (top + contentRect.height > heightMax) {
        top -= top + contentRect.height - heightMax;
      } else if (top < marginThreshold) {
        top = marginThreshold;
      }

      // Check Horizontal Constraints
      if (left + contentRect.width > widthMax) {
        left -= left + contentRect.width - widthMax;
      } else if (left < marginThreshold) {
        left = marginThreshold;
      }
    }

    // Handle fullWidth menu
    if (fullWidth) {
      left = 0;
    }

    setContentStyles({
      top: `${top}px`,
      left: `${left}px`,
      position: "fixed"
    });
  };

  const updatePosition = () => {
    if (!currentAnchorEl) return undefined;
    return setPositioningStyle();
  };

  const positionChangeEventHandler = debounce(updatePosition, 10);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleCloseEvent = event => {
    if (!contentRef.current || !isOpen) return;
    if (event.type === "mousedown") {
      // Check if mouse click happened inside popover
      // Or on the currentAnchorEl
      const target = event.target;
      if (
        contentRef.current === target ||
        currentAnchorEl === target ||
        isDescendant(contentRef.current, target) ||
        isDescendant(currentAnchorEl, target)
      ) {
        return;
      }
      handleClose();
    } else if (
      ["resize", "scroll"].includes(event.type) ||
      (event.type === "keydown" && event.key === "Escape")
    ) {
      handleClose();
    } else if (event.type === "keydown" && onKeyDown) {
      // stop this event from triggering other keydown listeners
      event.stopImmediatePropagation();

      onKeyDown(event);
    } else {
      handleClose();
    }
  };

  const manageScrollableParentEventListeners = (addListeners = true) => {
    if (currentAnchorEl) {
      const closestScrollableParent = getClosestScrollableParent(
        currentAnchorEl
      );
      if (closestScrollableParent) {
        const events = ["resize", "scroll"];
        const onCloseHandler = closeOnScrolled
          ? handleClose
          : positionChangeEventHandler;

        if (addListeners) {
          events.forEach(event =>
            closestScrollableParent.addEventListener(event, onCloseHandler)
          );
        } else {
          events.forEach(event =>
            closestScrollableParent.removeEventListener(event, onCloseHandler)
          );
        }
      }
    }
  };

  const resetParentScroll = () => {
    scrollContainer.style.overflow = scrollContainerStyle;
    setScrollContainer(null);
    setScrollContainerStyle(null);
  };

  // Adds the window event listeners and the anchorEl listeners.
  useEffect(() => {
    window.addEventListener("resize", positionChangeEventHandler);
    window.addEventListener("scroll", positionChangeEventHandler);
    window.addEventListener("mousedown", handleCloseEvent);
    window.addEventListener("keydown", handleCloseEvent);

    if (currentAnchorEl) {
      manageScrollableParentEventListeners(true);
    }

    setPositioningStyle();

    // Calls on unmount; remove event listeners
    return () => {
      window.removeEventListener("resize", positionChangeEventHandler);
      window.removeEventListener("scroll", positionChangeEventHandler);
      window.removeEventListener("mousedown", handleCloseEvent);
      window.removeEventListener("keydown", handleCloseEvent);

      manageScrollableParentEventListeners(false);
      resetParentScroll();
    };
  }, []);

  // Updates currentAnchorEl if anchorEl changes.
  useEffect(() => {
    if (currentAnchorEl === null && anchorEl !== null)
      setCurrentAnchorEl(getAnchorEl(anchorEl));
  }, [anchorEl]);

  // Updates positioning style and listeners
  useEffect(() => {
    if (currentAnchorEl) {
      manageScrollableParentEventListeners(true);
    }
    if (isOpen || currentAnchorEl) {
      // need to use requestAnimationFrame in order for popover to get proper position on first open
      window.requestAnimationFrame(setPositioningStyle);
    }
  }, [anchorPosition, contentPosition, currentAnchorEl]);

  /* Add/remove scroll of parent element of popover when popover open
    and lockScroll is true. */
  useEffect(() => {
    if (lockScroll && currentAnchorEl) {
      const parent = currentAnchorEl.parentElement;
      const outerNode =
        parent.nodeName === "HTML" &&
        window.getComputedStyle(parent)["overflow-y"] === "scroll"
          ? parent
          : getDocument(currentAnchorEl).body;

      setScrollContainer(outerNode);
      setScrollContainerStyle(outerNode.style.overflow);
      outerNode.style.overflow = "hidden";
    } else if (lockScroll && scrollContainer && !currentAnchorEl) {
      resetParentScroll();
    }
  }, [currentAnchorEl, lockScroll]);

  return (
    <React.Fragment>
      {anchorEl && isOpen && (
        <Component
          style={{ ...styles, ...contentStyles }}
          ref={contentRef}
          className={clsx(classes, "popover", { open: isOpen })}
        >
          {children}
        </Component>
      )}
      <style jsx>{`
          .popover {
            background: ${theme.palette.common.white};
            border-radius: ${theme.shape.borderRadius.md};
            box-shadow: ${theme.shadows[4]};
            box-sizing: border-box;
            max-height: calc(100% - 32px);
            max-width: ${fullWidth ? "100%" : "calc(100% - 32px)"};
            min-height: 16px;
            min-width: 16px;
            outline: 0;
            position: absolute;
            ${fullWidth ? "width: 100%;" : ""}
            z-index: ${theme.zIndex.middle};
          }

          .popover::webkit-scrollbar {
            display: none;
          }
        `}</style>
    </React.Fragment>
  );
};

Popover.propTypes = {
  /**
   * Either a reference to an anchor element or a function to get the reference
   */
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * The location to attach the content too on the anchor element
   */
  anchorPosition: PropTypes.object,

  /**
   * The content of the component
   */
  children: PropTypes.node,

  /**
   * Array of additional CSS classes to use.
   */
  classes: PropTypes.array,

  /**
   * Whether the popover should be closed when its closest scrollable parent is scrolled.
   * [Default] true
   */
  closeOnScrolled: PropTypes.bool,

  /**
   * The type of element to use at the root
   */
  component: PropTypes.string,

  /**
   * The location to attach the anchor to on the content element
   */
  contentPosition: PropTypes.object,

  /**
   * Whether or not the dropdown should take up the entire screen-width.
   */
  fullWidth: PropTypes.bool,

  /**
   * Whether the popover should be displayed
   */
  isOpen: PropTypes.bool,

  /**
   * Whether to keep the popout on screen when the anchor element scrolls off
   */
  keepOnScreen: PropTypes.bool,

  /**
   * Whether to lock the scrollbar when the popover is open
   */
  lockScroll: PropTypes.bool,

  /**
   * The marigins of the page the popover should respect
   */
  marginThreshold: PropTypes.number,

  /**
   * Function call to handle clickaway/ close events,
   * if not provided the anchor element must be removed to clear the popover or use isOpen
   */
  onClose: PropTypes.func,

  /**
   * Function call to handle keydown events,
   */
  onKeyDown: PropTypes.func,

  /**
   * Styles to apply to the component
   */
  styles: PropTypes.object
};

Popover.defaultProps = {
  anchorPosition: {
    vertical: "top",
    horizontal: "left"
  },
  contentPosition: {
    vertical: "top",
    horizontal: "left"
  },
  closeOnScrolled: true,
  component: "span",
  fullWidth: false,
  isOpen: true,
  lockScroll: true,
  marginThreshold: 16,
  styles: {}
};

Popover.displayName = "Popover";

export default withClasses(Popover);

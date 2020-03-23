import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import ThemeContext from "../styles/ThemeContext";

import {
  getContainer,
  getDocument,
  getOffsetLeft,
  getOffsetTop,
  debounce
} from "../utils";
import withClasses from "../utils/withClasses";

class Popover extends React.Component {
  static propTypes = {
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
    children: PropTypes.object,

    /**
     * Array of additional CSS classes to use.
     */
    classes: PropTypes.array,

    /**
     * The type of element to use at the root
     */
    component: PropTypes.string,

    /**
     * The location to attach the anchor to on the content element
     */
    contentPosition: PropTypes.object,

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
     * The margins of the page the popover should respect
     */
    marginThreshold: PropTypes.number,

    /**
     * Function call to handle clickaway/ close events,
     * if not provided the anchor element must be removed to clear the popover or use isOpen
     */
    onClose: PropTypes.func,

    /**
     * Styles to apply to the component
     */
    styles: PropTypes.object
  };

  static defaultProps = {
    component: "span",
    isOpen: true,
    lockScroll: true,
    marginThreshold: 16,
    styles: {}
  };

  constructor(props) {
    super(props);
    this.positionChangeEventHandler = debounce(this.updatePosition, 10);
    this.handleCloseEvent = this.handleCloseEvent.bind(this);
    this.state = {
      scrollContainer: null,
      scrollContainerStyle: null,
      contentStyles: {
        top: 0,
        left: 0,
        visibility: "hidden"
      }
    };

    this.contentRef = React.createRef();
  }

  componentDidMount() {
    const { anchorEl, lockScroll } = this.props;

    window.addEventListener("resize", this.positionChangeEventHandler);
    window.addEventListener("scroll", this.positionChangeEventHandler);
    window.addEventListener("mousedown", this.handleCloseEvent);
    window.addEventListener("keydown", this.handleCloseEvent);

    if (anchorEl && lockScroll) {
      this.lockParentScroll();
    }

    this.setPositioningStyle();
  }

  componentDidUpdate(prevProps) {
    const anchorChange =
      prevProps.anchorEl === null && this.props.anchorEl !== null;
    const openChange = !prevProps.isOpen && this.props.isOpen;
    const anchorPositionChange = !(
      prevProps.anchorPosition === this.props.anchorPosition
    );
    const contentPositionChange = !(
      prevProps.contentPosition === this.props.contentPosition
    );

    if (
      anchorChange ||
      openChange ||
      contentPositionChange ||
      anchorPositionChange
    ) {
      this.setPositioningStyle();
    }
  }

  componentWillUnmount() {
    const { anchorEl, lockScroll } = this.props;
    window.removeEventListener("resize", this.positionChangeEventHandler);
    window.removeEventListener("scroll", this.positionChangeEventHandler);
    window.removeEventListener("mousedown", this.handleCloseEvent);
    window.removeEventListener("keydown", this.handleCloseEvent);

    if (anchorEl && lockScroll) {
      this.resetParentScroll();
    }
  }

  getAnchorEl = () => {
    const { anchorEl } = this.props;
    return typeof anchorEl === "function" ? anchorEl() : anchorEl;
  };

  setPositioningStyle = () => {
    const contentRef = this.contentRef.current;

    const {
      anchorPosition = {
        vertical: "top",
        horizontal: "left"
      },
      contentPosition = {
        vertical: "top",
        horizontal: "left"
      },
      keepOnScreen
    } = this.props;

    const anchorEl = this.getAnchorEl();
    console.log(anchorEl);
    if (!anchorEl || !contentRef) return;

    // Set top and left of element based on location of anchor
    const anchorRect = anchorEl.getBoundingClientRect();
    let top = anchorRect.top;
    let left = anchorRect.left;
    console.log("from anchorRect,", { top, left });

    // Offset Content Based on anchorPosition props
    const anchorVerticalOffset = getOffsetTop(
      anchorRect,
      anchorPosition.vertical
    );
    const anchorHorizonalOffset = getOffsetLeft(
      anchorRect,
      anchorPosition.horizontal
    );

    console.log({ anchorVerticalOffset, anchorHorizonalOffset });

    top += anchorVerticalOffset;
    left += anchorHorizonalOffset;

    console.log("after anchorHorizontalOffset,", { left });

    // Offset Content Based on contentPosition props
    const contentRect = contentRef.getBoundingClientRect();
    console.log("contentRef: ", contentRef);

    console.log("contentRect:", contentRect);

    const contentVerticalOffset = getOffsetTop(
      contentRect,
      contentPosition.vertical
    );
    const contentHorizontalOffset = getOffsetLeft(
      contentRect,
      contentPosition.horizontal
    );

    console.log({ contentVerticalOffset, contentHorizontalOffset });

    top -= contentVerticalOffset;
    left -= contentHorizontalOffset;
    console.log("After contentHorizontalOffset:", { left });

    // Move menu back into view if out of screen
    if (keepOnScreen) {
      const { marginThreshold } = this.props;
      const viewContainer = getContainer(anchorEl);

      const heightMax = viewContainer.innerHeight - marginThreshold;
      const widthMax = viewContainer.innerWidth - marginThreshold;

      console.log({ heightMax, widthMax, marginThreshold });

      // Check Vertical Constraints
      if (top + contentRect.height > heightMax) {
        top -= top + contentRect.height - heightMax;
      } else if (top < marginThreshold) {
        top = marginThreshold;
      }

      // Check Horizontal Constraints
      if (left + contentRect.width > widthMax) {
        left = contentRect.width - widthMax;
      } else if (left < marginThreshold) {
        left = marginThreshold;
      }
      console.log("after keepOnScreen:", { top, left });
    }

    this.setState(
      Object.assign(this.state, {
        contentStyles: {
          top: `${top}px`,
          left: `${left}px`,
          position: "fixed"
        }
      })
    );
  };

  isDecendant(parent, child) {
    const node = child.parentNode;
    if (node == null) {
      return false;
    } else if (node === parent) {
      return true;
    }
    return this.isDecendant(parent, node);
  }

  handleCloseEvent = event => {
    const { isOpen, anchorEl } = this.props;
    const contentRef = this.contentRef.current;
    if (!contentRef || !isOpen) return;
    if (event.type === "mousedown") {
      // Check if mouse click happened inside popover
      // Or on the anchorEl
      const target = event.target;
      if (
        contentRef === target ||
        anchorEl === target ||
        this.isDecendant(contentRef, target) ||
        this.isDecendant(anchorEl, target)
      ) {
        return;
      }
      this.handleClose();
    } else if (event.type === "keydown" && event.key === "Escape") {
      this.handleClose();
    }
  };

  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  // Find the outer most scrollable content and remove the scrollbar
  lockParentScroll() {
    const anchorEl = this.getAnchorEl();
    const parent = anchorEl.parentElement;
    const container = getDocument(anchorEl);

    this.state.scrollContainer =
      parent.nodeName === "HTML" &&
      window.getComputedStyle(parent)["overflow-y"] === "scroll"
        ? parent
        : container.body;

    this.state.scrollContainerStyle = this.state.scrollContainer.style.overflow;
    this.state.scrollContainer.style.overflow = "hidden";
  }

  resetParentScroll() {
    this.state.scrollContainer.style.overflow = this.state.scrollContainerStyle;
  }

  updatePosition = () => {
    if (!this.props.anchorEl) return undefined;
    return this.setPositioningStyle();
  };

  static contextType = ThemeContext;

  render() {
    const {
      anchorEl,
      classes,
      children,
      component,
      styles,
      isOpen
    } = this.props;
    const theme = this.context;
    const className = clsx(classes, "popover", { open: isOpen });
    const Component = component;

    return (
      <React.Fragment>
        {anchorEl && isOpen && (
          <Component
            style={{ ...styles, ...this.state.contentStyles }}
            ref={this.contentRef}
            className={className}
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
            max-width: calc(100% - 32px);
            min-height: 16px;
            min-width: 16px;
            outline: 0;
            position: absolute;
            z-index: ${theme.zIndex.middle};
          }

          .popover::webkit-scrollbar {
            display: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Popover);

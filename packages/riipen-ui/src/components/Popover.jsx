import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import ThemeContext from "../styles/ThemeContext";

import {
  getContainer,
  getDocument,
  getOffsetLeft,
  getOffsetTop,
  debounce
} from "../utils";

import ClickAway from "./ClickAway";

class Popover extends React.Component {
  static propTypes = {
    /**
     * The content of the component
     */
    children: PropTypes.object,

    /**
     * The classes applied to the component
     */
    className: PropTypes.string,

    /**
     * Function call to handle clickaway/ close events
     */
    handleClose: PropTypes.func.isRequired,

    /**
     * Either a reference to an anchor element or a function to get the reference
     */
    anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

    /**
     * The marigins of the page the popover should respect
     */
    marginThreshold: PropTypes.number,

    /**
     * The location to attach the content too on the anchor element
     */
    anchorPosition: PropTypes.object,

    /**
     * The location to attach the anchor to on the content element
     */
    contentPosition: PropTypes.object,

    /**
     * The type of element to use at the root
     */
    type: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollContainer: null,
      scrollContainerStyle: null,
      dropdownRef: null,
      scrollHandler: debounce(this.updatePosition, 100)
    };
  }

  componentDidMount() {
    const { scrollHandler } = this.state;
    window.addEventListener("resize", scrollHandler);

    this.lockParentScroll();
  }

  componentWillUnmount() {
    const { scrollHandler } = this.state;
    window.removeEventListener("resize", scrollHandler);

    this.resetParentScroll();
  }

  onClose = () => {
    const { handleClose } = this.props;
    if (handleClose) handleClose();
  };

  getAnchorEl = () => {
    const { anchorEl } = this.props;
    return typeof anchorEl === "function" ? anchorEl() : anchorEl;
  };

  getPositioningStyle = () => {
    const { dropdownRef } = this.state;
    const {
      anchorPosition = {
        vertical: "top",
        horizontal: "left"
      },
      contentPosition = {
        vertical: "top",
        horizontal: "left"
      }
    } = this.props;

    const anchorEl = this.getAnchorEl();
    if (!anchorEl || !dropdownRef) return {};

    // Set top and left of element based on location of anchor
    const anchorRect = anchorEl.getBoundingClientRect();

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
    const contentRect = dropdownRef.getBoundingClientRect();
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
    const { marginThreshold = 16 } = this.props;
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

    return {
      top: `${top}px`,
      left: `${left}px`
    };
  };

  setDropdownRef = el => {
    this.setState({
      dropdownRef: el
    });
  };

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
    return this.forceUpdate();
  };

  static contextType = ThemeContext;

  render() {
    const { className, children, handleClose, type = "span" } = this.props;
    const theme = this.context;
    const classes = clsx(className, "root");
    const Component = type;

    return (
      <React.Fragment>
        <ClickAway onClickAway={handleClose}>
          <Component
            style={this.getPositioningStyle()}
            ref={this.setDropdownRef}
            className={classes}
          >
            {children}
          </Component>
        </ClickAway>
        <style jsx>{`
          .root {
            position: absolute;
            overflow-y: auto;
            overflow-x: hidden;
            min-width: 16px;
            min-height: 16px;
            max-width: calc(100% - 32px);
            max-height: calc(100% - 32px);
            outline: 0;
            box-shadow: ${theme.shadows[4]};
            box-sizing: border-box;
            background: ${theme.palette.background.default};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Popover;

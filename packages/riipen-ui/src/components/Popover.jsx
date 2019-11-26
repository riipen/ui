import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import ThemeContext from "../styles/ThemeContext";

import ClickAway from "./ClickAway";

export function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}

export function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}

export function getScrollParent(parent, child) {
  let el = child;
  let scrollTop = 0;

  while (el && el !== parent) {
    el = el.parentElement;
    scrollTop += el.scrollTop;
  }

  return scrollTop;
}

export function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical]
    .map(n => (typeof n === "number" ? `${n}px` : n))
    .join(" ");
}

class Popover extends React.Component {
  static propTypes = {
    children: PropTypes.object,

    className: PropTypes.string,

    handleClose: PropTypes.func.isRequired,

    getContentAnchorEl: PropTypes.func,

    anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

    marginThreshold: PropTypes.number,

    anchorReference: PropTypes.oneOf(["anchorEl", "anchorPosition", "none"]),

    anchorPosition: PropTypes.object,

    type: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollContainer: null,
      scrollContainerStyle: null,
      dropdownRef: null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updatePosition());
    // window.addEventListener("scroll", () => this.updatePosition());

    const parent = this.getAnchorElRef().parentElement;

    const anchorEl = this.getAnchorElRef;
    const container = this.getDocument(anchorEl);

    this.state.scrollContainer =
      parent.nodeName === "HTML" &&
      window.getComputedStyle(parent)["overflow-y"] === "scroll"
        ? parent
        : container.body;

    this.state.scrollContainerStyle = this.state.scrollContainer.style.overflow;
    // this.state.scrollContainer.style.overflow = "hidden";
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", () => this.updatePosition());
    // window.removeEventListener("scroll", () => this.updatePosition());

    this.state.scrollContainer.style.overflow = this.state.scrollContainerStyle;
  }

  onClose = () => {
    const { handleClose } = this.props;
    if (handleClose) handleClose();
  };

  getAnchorElRef = () => {
    const { anchorEl } = this.props;
    return typeof anchorEl === "function" ? anchorEl() : anchorEl;
  };

  getDocument = node => {
    return (node && node.ownerDocument) || document;
  };

  getContainer = node => {
    const doc = this.getDocument(node);
    return doc.defaultView || window;
  };

  getAnchorOffset = contentAnchorOffset => {
    const anchorEl = this.getAnchorElRef();
    const {
      anchorPosition = {
        vertical: "top",
        horizontal: "left"
      }
    } = this.props;

    const containerWindow = this.getContainer(anchorEl);

    const anchor =
      anchorEl instanceof containerWindow.Element
        ? anchorEl
        : this.getDocument(React.useRef().current).body;

    const anchorRect = anchor.getBoundingClientRect();

    const anchorVertical =
      contentAnchorOffset === 0 ? anchorPosition.vertcal : "bottom";

    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left:
        anchorRect.left + getOffsetLeft(anchorRect, anchorPosition.horizontal)
    };
  };

  getContentAnchorOffset = element => {
    let contentAnchorOffset = 0;
    const { anchorReference, getContentAnchorEl } = this.props;

    if (element && anchorReference === "anchorEl") {
      const contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        const scrollTop = this.getScrollParent(element, contentAnchorEl);
        contentAnchorOffset =
          contentAnchorEl.offsetTop +
            contentAnchorEl.clientHeight / 2 -
            scrollTop || 0;
      }
    }

    return contentAnchorOffset;
  };

  getTransformOrigin = (elemRect, contentAnchorOffset = 0) => {
    const { anchorPosition } = this.props;
    return {
      vertical:
        getOffsetTop(elemRect, anchorPosition.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, anchorPosition.horizontal)
    };
  };

  getPositioningStyle = () => {
    const element = this.getAnchorElRef();
    if (element == null) return {};
    // Check if the parent has requested anchoring on an inner content node
    const contentAnchorOffset = this.getContentAnchorOffset(element);
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };

    // Get the transform origin point on the element itself
    const elemTransformOrigin = this.getTransformOrigin(
      elemRect,
      contentAnchorOffset
    );

    // Get the offset of of the anchoring element
    const anchorOffset = this.getAnchorOffset(contentAnchorOffset);

    // Calculate element positioning
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;

    const bottom = top + elemRect.height;
    const right = left + elemRect.width;

    // Use the parent window of the anchorEl if provided
    const containerWindow = this.getContainer(element);

    let dropdownOffsetHeight = 0;
    if (this.state.dropdownRef) {
      dropdownOffsetHeight = this.state.dropdownRef.offsetHeight;
    }

    // Window thresholds taking required margin into account
    const { marginThreshold = 16 } = this.props;

    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;

    // Check if the vertical axis needs shifting
    const dropdownBottom =
      bottom + elemTransformOrigin.vertical + dropdownOffsetHeight;
    if (top < marginThreshold) {
      const diff = (top - marginThreshold) / 3;
      top -= diff;
      elemTransformOrigin.vertical -= diff;
    } else if (dropdownBottom > heightThreshold) {
      const diff = (dropdownBottom - heightThreshold) / 2;
      elemTransformOrigin.vertical -= diff;
    }

    // Check if the horizontal axis needs shifting
    if (left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }

    return {
      top: `${top + elemTransformOrigin.vertical}px`,
      left: `${left + elemTransformOrigin.horizontal}px`,
      transform: `translate(${elemTransformOrigin.horizontal}px, ${elemTransformOrigin.vertical}px)`
    };
  };

  setDropdownRef = el => {
    this.setState({
      dropdownRef: el
    });
  };

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
            box-shadow: ${theme.shadows[24]};
            box-sizing: border-box;

            background: ${theme.palette.background.default};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Popover;

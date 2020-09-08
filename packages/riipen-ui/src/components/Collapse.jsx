import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { Transition } from "react-transition-group";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

const Collapse = props => {
  const {
    children,
    classes,
    component: Component = "div",
    in: inProp,
    ...other
  } = props;

  const theme = React.useContext(ThemeContext);

  const wrapperRef = React.useRef(null);

  const getLinkedStyles = () => {
    return css.resolve`
      .root {
        height: 0;
        min-height: 0px;
        overflow: hidden;
        transition: ${theme.transitions.create(["height"])};
      }

      .entered {
        height: auto;
        overflow: visible;
      }
      .exited {
        visibility: hidden;
      }
    `;
  };

  const getWrapperSize = () =>
    wrapperRef.current ? wrapperRef.current.clientHeight : 0;

  const handleEnter = node => {
    if (wrapperRef.current) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = "absolute";
    }

    node.style.height = "0px";
  };

  const handleEntering = node => {
    const wrapperSize = getWrapperSize();

    if (wrapperRef.current) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = "";
    }

    node.style.transitionDuration = `${theme.transitions.duration.standard}ms`;
    node.style.height = `${wrapperSize}px`;
  };

  const handleEntered = node => {
    node.style.height = "auto";
  };

  const handleExit = node => {
    node.style.height = `${getWrapperSize()}px`;
  };

  const handleExiting = node => {
    node.style.transitionDuration = `${theme.transitions.duration.standard}ms`;
    node.style.height = "0px";
  };

  const linkedStyles = getLinkedStyles();

  return (
    <Transition
      in={inProp}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExiting={handleExiting}
      timeout={theme.transitions.duration.standard}
      {...other}
    >
      {(state, childProps) => (
        <Component
          className={clsx(
            linkedStyles.className,
            "root",
            {
              entered: state === "entered",
              exited: state === "exited" && !inProp
            },
            classes
          )}
          {...childProps}
        >
          <div ref={wrapperRef}>{children}</div>
          {linkedStyles.styles}
        </Component>
      )}
    </Transition>
  );
};

Collapse.propTypes = {
  /**
   * The content node to be collapsed.
   */
  children: PropTypes.node,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool
};

Collapse.defaultProps = {
  classes: [],
  component: "div"
};

Collapse.displayName = "Collapse";

export default Collapse;

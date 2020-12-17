import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import AccordionContext from "../contexts/AccordionContext";
import ThemeContext from "../styles/ThemeContext";

import Collapse from "./Collapse";

const Accordion = props => {
  const {
    children: childrenProp,
    classes,
    defaultExpanded,
    disabled,
    ...other
  } = props;

  const theme = React.useContext(ThemeContext);

  const [expanded, setExpanded] = React.useState(defaultExpanded);

  React.useEffect(() => {
    setExpanded(defaultExpanded);
  }, [defaultExpanded]);

  const handleChange = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  const [summary, ...children] = React.Children.toArray(childrenProp);

  const contextValue = React.useMemo(
    () => ({ disabled, expanded, toggle: handleChange }),
    [expanded, disabled, handleChange]
  );

  return (
    <div
      className={clsx(
        "root",
        {
          expanded,
          disabled
        },
        classes
      )}
      {...other}
    >
      <AccordionContext.Provider value={contextValue}>
        {summary}
      </AccordionContext.Provider>
      <Collapse in={expanded}>
        <div
          aria-labelledby={summary.props.id}
          id={summary.props["aria-controls"]}
        >
          {children}
        </div>
      </Collapse>

      <style jsx>{`
        .root {
          position: relative;
          transition: ${theme.transitions.create(["margin"])};
          overflow-anchor: none;
        }
        .root:before {
          position: absolute;
          left: 0;
          top: -1;
          right: 0;
          height: 1;
          content: "";
          opacity: 1;
          background-color: ${theme.palette.divider};
          transition: ${theme.transitions.create([
            "background-color",
            "opacity"
          ])};
        }
        .root:first-child:before {
          display: "none";
        }

        .root.expanded:before {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

Accordion.propTypes = {
  /**
   * The content of the accordion.
   */
  children: PropTypes.node.isRequired,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * If `true`, expands the accordion by default.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * If `true`, the accordion will be displayed in a disabled state.
   */
  disabled: PropTypes.bool
};

Accordion.defaultProps = {
  classes: [],
  defaultExpanded: false,
  disabled: false
};

Accordion.displayName = "Accordion";

export default Accordion;

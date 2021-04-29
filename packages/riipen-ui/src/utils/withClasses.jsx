import React from "react";
import PropTypes from "prop-types";

/**
 * This HoC must be the immediate parent of the wrapped component to correctly get the name
 */
const withClasses = WrappedComponent => {
  const name = WrappedComponent.displayName || WrappedComponent.name;

  const handle = (props = {}) => {
    const { classes, ...other } = props;

    return (
      <WrappedComponent
        classes={["riipen", `riipen-${name.toLowerCase()}`, ...(classes || [])]}
        {...other}
      />
    );
  };

  handle.propTypes = {
    /**
     * Class list to append the default classes to.
     */
    classes: PropTypes.array
  };

  handle.displayName = `withClasses(${name})`;

  return handle;
};

export default withClasses;

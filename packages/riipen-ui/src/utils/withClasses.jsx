import React from "react";
import PropTypes from "prop-types";

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

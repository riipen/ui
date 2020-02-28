import React from "react";

const withClasses = WrappedComponent => {
  const handle = props => {
    // eslint-disable-next-line react/prop-types
    const { classes = [], ...other } = props;
    return <WrappedComponent classes={["riipen", ...classes]} {...other} />;
  };

  const name = WrappedComponent.displayName || WrappedComponent.name;
  handle.displayName = `withClasses(${name})`;

  return handle;
};

export default withClasses;

import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const withClasses = () => Component => {
  if (process.env.NODE_ENV !== "production") {
    if (Component === undefined) {
      throw new Error(
        [
          "You are calling withStyles(styles)(Component) with an undefined component.",
          "You may have forgotten to import it."
        ].join("\n")
      );
    }
  }

  const WithClasses = React.forwardRef(function WithClasses(props, ref) {
    const { classes, ...other } = props;
    return (
      <Component ref={ref} classes={[clsx("riipen", classes)]} {...other} />
    );
  });

  WithClasses.propTypes = {
    /**
     * Extend the styles applied to the component.
     */
    classes: PropTypes.object
  };

  return WithClasses;
};

export default withClasses;

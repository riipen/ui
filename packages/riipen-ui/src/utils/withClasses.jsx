import React from "react";
import PropTypes from "prop-types";

const withClasses = () => Component => {
  const WithClasses = React.forwardRef(function WithClasses(props, ref) {
    const { classes, ...other } = props;
    return <Component ref={ref} classes={["riipen", ...classes]} {...other} />;
  });

  WithClasses.defaultProps = {
    classes: []
  };

  WithClasses.propTypes = {
    /**
     * Extend the styles applied to the component.
     */
    classes: PropTypes.object
  };

  return WithClasses;
};

export default withClasses;

import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const AccordionDetails = props => {
  const { classes, ...other } = props;

  return (
    <React.Fragment>
      <div className={clsx("root", classes)} {...other} />
      <style jsx>{`
        .root {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

AccordionDetails.propTypes = {
  /**
   * The content of the accordion details.
   */
  children: PropTypes.node,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array
};

AccordionDetails.displayName = "AccordionDetails";

export default AccordionDetails;

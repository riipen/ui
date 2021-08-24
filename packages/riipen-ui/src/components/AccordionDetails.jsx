import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

const AccordionDetails = props => {
  const { classes, ...other } = props;

  return (
    <>
      <div className={clsx("root", classes)} {...other} />
      <style jsx>{`
        .root {
          display: flex;
        }
      `}</style>
    </>
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

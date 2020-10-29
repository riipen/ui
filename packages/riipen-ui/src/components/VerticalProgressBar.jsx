import React from "react";
import PropTypes from "prop-types";

import withClasses from "../utils/withClasses";

import Grid from "./Grid";
import GridItem from "./GridItem";
import VerticalProgressBarItem from "./VerticalProgressBarItem";

const VerticalProgressBar = ({ progresses }) => {
  const renderProgress = () => {
    return progresses.map((progress, index) => (
      <GridItem key={`progress-${index}`}>
        <VerticalProgressBarItem
          progress={{ ...progress, noBar: index >= progresses.length - 1 }}
        />
      </GridItem>
    ));
  };
  return (
    <div>
      <Grid spacing={0}>{renderProgress()}</Grid>
    </div>
  );
};

VerticalProgressBar.propTypes = {
  // external

  /**
   * The progresses to display.
   */
  progresses: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The progress icon.
       */
      icon: PropTypes.object,

      /**
       * The content to render inside.
       */
      children: PropTypes.node,

      /**
       * The colour of the progress icon.
       */
      color: PropTypes.string,

      /**
       * Whether to not have bar.
       */
      noBar: PropTypes.bool
    })
  )
};

VerticalProgressBar.defaultProps = {
  progresses: []
};

export default withClasses(VerticalProgressBar);

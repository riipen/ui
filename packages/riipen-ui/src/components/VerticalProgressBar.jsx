import React from "react";
import PropTypes from "prop-types";

import withClasses from "../utils/withClasses";

import Grid from "./Grid";
import GridItem from "./GridItem";

const VerticalProgressBar = ({ children, classes }) => (
  <Grid classes={classes} spacing={0}>
    {React.Children.map(children, (child, index) => (
      <GridItem key={`progress-${index}`}>
        {index === children.length - 1
          ? React.cloneElement(child, { bar: false })
          : child}
      </GridItem>
    ))}
  </Grid>
);

VerticalProgressBar.propTypes = {
  // external

  /**
   * The progresses to display.
   */
  children: PropTypes.node,

  /**
   * Additional classes to style with.
   */
  classes: PropTypes.array
};

VerticalProgressBar.defaultProps = {
  children: [],
  classes: []
};

export default withClasses(VerticalProgressBar);

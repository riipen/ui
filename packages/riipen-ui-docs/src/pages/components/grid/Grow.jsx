import React from "react";

import Grid from "riipen-ui/components/Grid";
import GridItem from "riipen-ui/components/GridItem";

export default function GrowingGrid() {
  const itemStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
    padding: "10px",
    textAlign: "center"
  };

  return (
    <Grid>
      <GridItem lg={3}>
        <div style={itemStyle}>lg=3</div>
      </GridItem>
      <GridItem lg={2} flexGrow={1}>
        <div style={itemStyle}>lg=2 Grow</div>
      </GridItem>
      <GridItem lg={2} flexGrow={1}>
        <div style={itemStyle}>lg=2 Grow</div>
      </GridItem>
      <GridItem lg={6}>
        <div style={itemStyle}>lg=6</div>
      </GridItem>
      <GridItem lg={4} flexGrow={1}>
        <div style={itemStyle}>lg=4 Grow</div>
      </GridItem>
    </Grid>
  );
}

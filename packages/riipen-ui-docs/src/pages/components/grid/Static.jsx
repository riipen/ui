import React from "react";

import Grid from "riipen-ui/components/Grid";
import GridItem from "riipen-ui/components/GridItem";
import Typography from "riipen-ui/components/Typography";

export default function CenteredGrid() {
  const itemStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
    padding: "10px",
    textAlign: "center"
  };

  return (
    <Grid>
      <GridItem lg={12}>
        <div style={itemStyle}>lg=12</div>
      </GridItem>
      <GridItem lg={6}>
        <div style={itemStyle}>lg=6</div>
      </GridItem>
      <GridItem lg={6}>
        <div style={itemStyle}>lg=6</div>
      </GridItem>
      <GridItem lg={3}>
        <div style={itemStyle}>lg=3</div>
      </GridItem>
      <GridItem lg={3}>
        <div style={itemStyle}>lg=3</div>
      </GridItem>
      <GridItem lg={3}>
        <div style={itemStyle}>lg=3</div>
      </GridItem>
      <GridItem lg={3}>
        <div style={itemStyle}>lg=3</div>
      </GridItem>
      <Typography>Test</Typography>
    </Grid>
  );
}

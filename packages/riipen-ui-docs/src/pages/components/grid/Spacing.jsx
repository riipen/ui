import React from "react";

import Grid from "@riipen-ui/components/Grid";
import GridItem from "@riipen-ui/components/GridItem";

export default function CenteredGrid() {
  const itemStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
    padding: "10px",
    textAlign: "center",
    width: "100%"
  };

  return (
    <React.Fragment>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(spacing => (
        <div key={spacing} style={{ marginBottom: "5px" }}>
          <Grid spacing={spacing}>
            <GridItem lg={3}>
              <div style={itemStyle}>{spacing}</div>
            </GridItem>
            <GridItem lg={3}>
              <div style={itemStyle}>{spacing}</div>
            </GridItem>
            <GridItem lg={3}>
              <div style={itemStyle}>{spacing}</div>
            </GridItem>
            <GridItem lg={3}>
              <div style={itemStyle}>{spacing}</div>
            </GridItem>
          </Grid>
        </div>
      ))}
    </React.Fragment>
  );
}

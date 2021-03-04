import React from "react";

import Paper from "riipen-ui/components/Paper";

export default function Elevation() {
  const style = {
    marginRight: "10px"
  };

  return (
    <React.Fragment>
      <Paper
        style={{
          height: "100px",
          width: "100px"
        }}
      />

      <span style={style} />

      <Paper
        elevation={1}
        style={{
          height: "100px",
          width: "100px"
        }}
      />

      <span style={style} />

      <Paper
        elevation={10}
        style={{
          height: "100px",
          width: "100px"
        }}
      />
    </React.Fragment>
  );
}

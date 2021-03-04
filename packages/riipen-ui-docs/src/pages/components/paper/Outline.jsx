import React from "react";

import Paper from "riipen-ui/components/Paper";

export default function Outline() {
  const style = {
    marginRight: "10px"
  };

  return (
    <React.Fragment>
      <Paper
        variant="outlined"
        style={{
          height: "100px",
          width: "100px"
        }}
      />

      <span style={style} />

      <Paper
        variant="outlined"
        rounded={true}
        style={{
          height: "100px",
          width: "100px"
        }}
      />
    </React.Fragment>
  );
}

import React from "react";

import Paper from "riipen-ui/components/Paper";

export default function Outline() {
  const style = {
    marginRight: "20px"
  };

  return (
    <>
      <Paper
        style={{
          display: "inline-block",
          height: "100px",
          width: "100px"
        }}
      />
      <span style={style} />
      <Paper
        variant="outlined"
        style={{
          display: "inline-block",
          height: "100px",
          width: "100px"
        }}
      />
    </>
  );
}

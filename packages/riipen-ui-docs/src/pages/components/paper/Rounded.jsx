import React from "react";

import Paper from "riipen-ui/components/Paper";

export default function Rounded() {
  const style = {
    marginRight: "20px"
  };

  return (
    <React.Fragment>
      <Paper
        style={{
          display: "inline-block",
          height: "100px",
          width: "100px"
        }}
      />
      <span style={style} />
      <Paper
        rounded
        style={{
          display: "inline-block",
          height: "100px",
          width: "100px"
        }}
      />
    </React.Fragment>
  );
}

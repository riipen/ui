import React from "react";

import Typography from "@riipen-ui/components/Typography";
import Warning from "@riipen-ui/components/Warning";

export default function Colors() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <div>
      <Warning color="primary">
        <Typography>Some warning text.</Typography>
      </Warning>
      <div style={style} />
      <Warning color="secondary">
        <Typography>Some warning text.</Typography>
      </Warning>
      <div style={style} />
      <Warning color="tertiary">
        <Typography>Some warning text.</Typography>
      </Warning>
      <div style={style} />
      <Warning color="positive">
        <Typography>Some warning text.</Typography>
      </Warning>
      <div style={style} />
      <Warning color="negative">
        <Typography>Some warning text.</Typography>
      </Warning>
    </div>
  );
}

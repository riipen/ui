import React from "react";

import Typography from "riipen-ui/components/Typography";
import Notice from "riipen-ui/components/Notice";

export default function Colors() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <div>
      <Notice color="primary">
        <Typography>Some notice text.</Typography>
      </Notice>
      <div style={style} />
      <Notice color="secondary">
        <Typography>Some notice text.</Typography>
      </Notice>
      <div style={style} />
      <Notice color="tertiary">
        <Typography>Some notice text.</Typography>
      </Notice>
      <div style={style} />
      <Notice color="positive">
        <Typography>Some notice text.</Typography>
      </Notice>
      <div style={style} />
      <Notice color="warning">
        <Typography>Some notice text.</Typography>
      </Notice>
      <div style={style} />
      <Notice color="negative">
        <Typography>Some notice text.</Typography>
      </Notice>
    </div>
  );
}

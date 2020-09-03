import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Variants() {
  const style = {
    marginRight: "10px"
  };

  const breakStyle = {
    marginTop: "10px"
  };

  return (
    <div>
      <div>
        <Chip label="Default" variant="outlined" color="default" />
        <span style={style} />
        <Chip label="Primary" variant="outlined" color="primary" />
        <span style={style} />
        <Chip label="Secondary" variant="outlined" color="secondary" />
        <span style={style} />
        <Chip label="Tertiary" variant="outlined" color="tertiary" />
      </div>
      <div style={breakStyle}>
        <Chip label="Positive" variant="outlined" color="positive" />
        <span style={style} />
        <Chip label="Warning" variant="outlined" color="warning" />
        <span style={style} />
        <Chip label="Negative" variant="outlined" color="negative" />
        <span style={style} />
        <Chip label="Dark" variant="outlined" color="dark" />
      </div>
    </div>
  );
}

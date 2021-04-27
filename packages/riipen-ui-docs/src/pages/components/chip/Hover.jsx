import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Hover() {
  const style = {
    marginRight: "10px"
  };

  const breakStyle = {
    marginTop: "10px"
  };

  return (
    <div>
      <div>
        <Chip label="Default" hover />
        <span style={style} />
        <Chip label="Primary" hover color="primary" />
        <span style={style} />
        <Chip label="Secondary" hover color="secondary" />
        <span style={style} />
        <Chip label="Tertiary" hover color="tertiary" />
      </div>
      <div style={breakStyle}>
        <Chip label="Default" hover variant="outlined" />
        <span style={style} />
        <Chip label="Primary" hover color="primary" variant="outlined" />
        <span style={style} />
        <Chip label="Secondary" hover color="secondary" variant="outlined" />
        <span style={style} />
        <Chip label="Tertiary" hover color="tertiary" variant="outlined" />
      </div>
    </div>
  );
}

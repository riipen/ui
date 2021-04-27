import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Disabled() {
  const style = {
    marginRight: "10px"
  };

  const breakStyle = {
    marginTop: "10px"
  };

  return (
    <div>
      <div>
        <Chip label="Default" disabled />
        <span style={style} />
        <Chip label="Primary" disabled color="primary" />
        <span style={style} />
        <Chip label="Secondary" disabled color="secondary" />
        <span style={style} />
        <Chip label="Tertiary" disabled color="tertiary" />
      </div>
      <div style={breakStyle}>
        <Chip label="Default" disabled variant="outlined" />
        <span style={style} />
        <Chip label="Primary" disabled color="primary" variant="outlined" />
        <span style={style} />
        <Chip label="Secondary" disabled color="secondary" variant="outlined" />
        <span style={style} />
        <Chip label="Tertiary" disabled color="tertiary" variant="outlined" />
      </div>
    </div>
  );
}

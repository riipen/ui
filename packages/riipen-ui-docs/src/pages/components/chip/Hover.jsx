import React from "react";

import Chip from "@riipen-ui/components/Chip";

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
        <Chip label="Positive" hover color="positive" />
        <span style={style} />
        <Chip label="Warning" hover color="warning" />
        <span style={style} />
        <Chip label="Negative" hover color="negative" />
      </div>
    </div>
  );
}

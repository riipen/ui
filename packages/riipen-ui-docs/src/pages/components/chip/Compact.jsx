import React from "react";

import Chip from "@riipen-ui/components/Chip";

export default function Compact() {
  const style = {
    marginRight: "10px"
  };

  const breakStyle = {
    marginTop: "10px"
  };

  return (
    <div>
      <div>
        <Chip label="Default" size="small" color="default" />
        <span style={style} />
        <Chip label="Primary" size="small" color="primary" />
        <span style={style} />
        <Chip label="Secondary" size="small" color="secondary" />
        <span style={style} />
        <Chip label="Tertiary" size="small" color="tertiary" />
      </div>
      <div style={breakStyle}>
        <Chip label="Positive" size="xsmall" color="positive" />
        <span style={style} />
        <Chip label="Warning" size="xsmall" color="warning" />
        <span style={style} />
        <Chip label="Negative" size="xsmall" color="negative" />
        <span style={style} />
        <Chip label="Dark" size="xsmall" color="dark" />
      </div>
    </div>
  );
}

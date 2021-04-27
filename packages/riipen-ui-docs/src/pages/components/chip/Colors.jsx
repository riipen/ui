import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Colors() {
  const style = {
    marginRight: "10px"
  };

  const breakStyle = {
    marginTop: "10px"
  };

  return (
    <div>
      <div>
        <Chip label="Default" color="default" />
        <span style={style} />
        <Chip label="Primary" color="primary" />
        <span style={style} />
        <Chip label="Secondary" color="secondary" />
        <span style={style} />
        <Chip label="Tertiary" color="tertiary" />
      </div>
      <div style={breakStyle}>
        <Chip label="Positive" color="positive" />
        <span style={style} />
        <Chip label="Warning" color="warning" />
        <span style={style} />
        <Chip label="Negative" color="negative" />
        <span style={style} />
        <Chip label="Grey 600" color="grey600" />
        <span style={style} />
        <Chip label="Grey A400" color="greyA400" />
      </div>
    </div>
  );
}

import React from "react";

import Chip from "@riipen-ui/components/Chip";

export default function Colors() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Chip label="Default" color="default" />
      <span style={style} />
      <Chip label="Primary" color="primary" />
      <span style={style} />
      <Chip label="Secondary" color="secondary" />
      <span style={style} />
      <Chip label="Tertiary" color="tertiary" />
    </div>
  );
}

import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Disabled() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Chip label="Default" />
      <span style={style} />
      <Chip label="Default" disabled />
    </div>
  );
}

import React from "react";

import Chip from "@riipen-ui/components/Chip";

export default function Variants() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Chip label="Default" variant="default" />
      <span style={style} />
      <Chip label="Outlined" variant="outlined" />
    </div>
  );
}

import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Compact() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Chip label="medium" size="medium" />
      <span style={style} />
      <Chip label="small" size="small" />
      <span style={style} />
      <Chip label="xsmall" size="xsmall" />
    </div>
  );
}

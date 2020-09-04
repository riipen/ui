import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Labels() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Chip label="Label 1" />
      <span style={style} />
      <Chip>
        <div style={{ color: "red" }}>{"Label 2"}</div>
      </Chip>
    </div>
  );
}

import React from "react";

import Chip from "@riipen-ui/components/Chip";

export default function Examples() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Chip label="Basic" color="default" />
      <span style={style} />
      <Chip label="Disabled" color="default" disabled />
      <span style={style} />
      <Chip label="With delete" color="default" onDelete={() => {}} />
    </div>
  );
}

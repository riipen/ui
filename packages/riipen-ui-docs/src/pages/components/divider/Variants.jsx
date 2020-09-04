import React from "react";

import Divider from "riipen-ui/components/Divider";

export default function Variants() {
  const style = {
    height: "10px"
  };

  return (
    <div>
      <Divider variant="fullWidth" />
      <div style={style} />
      <Divider variant="middle" />
    </div>
  );
}

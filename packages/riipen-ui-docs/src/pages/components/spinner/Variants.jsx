import React from "react";

import Spinner from "riipen-ui/components/Spinner";

export default function Variants() {
  const style = {
    marginBottom: "30px"
  };

  return (
    <div>
      <Spinner variant="clip" />
      <div style={style} />
      <Spinner variant="pulse" />
      <div style={style} />
      <Spinner variant="scale" />
    </div>
  );
}

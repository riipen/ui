import React from "react";

import VerticalDivider from "riipen-ui/components/VerticalDivider";

export default function Variants() {
  const style = {
    display: "flex",
    marginBottom: "5px"
  };

  return (
    <>
      {[1, 2, 3, 4, 5, 6].map(spacing => (
        <div style={style}>
          Hello
          <VerticalDivider spacing={spacing} />
          World
        </div>
      ))}
    </>
  );
}

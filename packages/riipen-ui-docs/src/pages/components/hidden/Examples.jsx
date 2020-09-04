import React from "react";

import Hidden from "riipen-ui/components/Hidden";

export default function Examples() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <div>
      <Hidden direction="down" size="xl">
        xl and down
      </Hidden>
      <span style={style} />
      <Hidden direction="down" size="md">
        md and down
      </Hidden>
      <span style={style} />
      <Hidden direction="up" size="md">
        md and up
      </Hidden>
      <span style={style} />
      <Hidden direction="up" size="lg">
        lg and up
      </Hidden>
    </div>
  );
}

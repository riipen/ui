import React from "react";

import Badge from "riipen-ui/components/Badge";
import Typography from "riipen-ui/components/Typography";

const style = {
  marginRight: "20px"
};

export default function Size() {
  return (
    <div>
      <Badge content={1} size="small">
        <Typography>Small</Typography>
      </Badge>
      <span style={style} />
      <Badge content={1} size="medium">
        <Typography>Medium</Typography>
      </Badge>
      <span style={style} />
    </div>
  );
}

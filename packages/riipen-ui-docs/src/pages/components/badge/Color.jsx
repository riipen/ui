import React from "react";

import Badge from "@riipen-ui/components/Badge";
import Typography from "@riipen-ui/components/Typography";

const style = {
  marginRight: "20px"
};

export default function Visibility() {
  return (
    <div>
      <Badge content={1} color="primary">
        <Typography>Primary</Typography>
      </Badge>
      <span style={style} />
      <Badge content={1} color="secondary">
        <Typography>Secondary</Typography>
      </Badge>
      <span style={style} />
      <Badge content={1} color="positive">
        <Typography>Positive</Typography>
      </Badge>
      <span style={style} />
      <Badge content={1} color="negative">
        <Typography>Negative</Typography>
      </Badge>
      <span style={style} />
      <Badge content={1} color="muted">
        <Typography>Muted</Typography>
      </Badge>
      <span style={style} />
    </div>
  );
}

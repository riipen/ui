import React from "react";

import Badge from "@riipen-ui/components/Badge";
import Typography from "@riipen-ui/components/Typography";

export default function Simple() {
  return (
    <div>
      <Badge content={5}>
        <Typography>Notifications</Typography>
      </Badge>
    </div>
  );
}

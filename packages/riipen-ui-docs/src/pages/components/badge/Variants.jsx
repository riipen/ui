import React from "react";

import Avatar from "@riipen-ui/components/Avatar";
import Badge from "@riipen-ui/components/Badge";

export default function Variants() {
  return (
    <div>
      <Badge variant="dot">
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
    </div>
  );
}

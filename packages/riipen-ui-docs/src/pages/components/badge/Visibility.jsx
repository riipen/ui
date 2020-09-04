import React from "react";

import Avatar from "riipen-ui/components/Avatar";
import Badge from "riipen-ui/components/Badge";

export default function Visibility() {
  return (
    <div>
      <Badge content={0} overlap="circle">
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <Badge content={0} showZero overlap="circle">
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

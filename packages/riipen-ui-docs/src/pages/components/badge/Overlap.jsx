import React from "react";

import Avatar from "@riipen-ui/components/Avatar";
import Badge from "@riipen-ui/components/Badge";

export default function Overlap() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Badge content={4} overlap="circle">
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <span style={style} />
      <Badge content={4} overlap="rectangle">
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="square"
        />
      </Badge>
    </div>
  );
}

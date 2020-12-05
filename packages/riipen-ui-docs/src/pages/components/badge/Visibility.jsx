import React from "react";

import Avatar from "riipen-ui/components/Avatar";
import Badge from "riipen-ui/components/Badge";

export default function Visibility() {
  const style = {
    marginRight: "10px"
  };

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
      <span style={style} />
      <Badge content={0} showZero overlap="circle">
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <span style={style} />
      <Badge overlap="circle" variant="dot">
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <span style={style} />
      <Badge content showZero overlap="circle" variant="dot">
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

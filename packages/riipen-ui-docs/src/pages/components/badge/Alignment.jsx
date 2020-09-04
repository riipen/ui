import React from "react";

import Avatar from "riipen-ui/components/Avatar";
import Badge from "riipen-ui/components/Badge";

export default function Alignment() {
  const style = {
    marginRight: "50px"
  };

  return (
    <div>
      <Badge
        anchor={{ horizontal: "right", vertical: "top" }}
        content={1}
        overlap="circle"
      >
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <span style={style} />
      <Badge
        anchor={{ horizontal: "right", vertical: "bottom" }}
        content={1}
        overlap="circle"
      >
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <span style={style} />
      <Badge
        anchor={{ horizontal: "left", vertical: "top" }}
        content={1}
        overlap="circle"
      >
        <Avatar
          alt="Jordan Ell"
          size="75px"
          src="/static/images/avatars/jordan-ell.png"
          variant="circle"
        />
      </Badge>
      <span style={style} />
      <Badge
        anchor={{ horizontal: "left", vertical: "bottom" }}
        content={1}
        overlap="circle"
      >
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

import React from "react";

import Avatar from "riipen-ui/components/Avatar";

export default function Variants() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Avatar
        alt="Jordan Ell"
        size="75px"
        src="/static/images/avatars/jordan-ell.png"
        variant="circle"
      />
      <span style={style} />
      <Avatar
        alt="Jordan Ell"
        size="75px"
        src="/static/images/avatars/jordan-ell.png"
        variant="rounded"
      />
      <span style={style} />
      <Avatar
        alt="Jordan Ell"
        size="75px"
        src="/static/images/avatars/jordan-ell.png"
        variant="square"
      />
    </div>
  );
}

import React from "react";

import Avatar from "riipen-ui/components/Avatar";

export default function Image() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Avatar
        alt="Jordan Ell"
        size="50px"
        src="/static/images/avatars/jordan-ell.png"
      />
      <Avatar alt="HE" size="50px">
        HE
      </Avatar>
      <span style={style} />
      <Avatar
        alt="Jordan Ell"
        size="100px"
        src="/static/images/avatars/jordan-ell.png"
      />
    </div>
  );
}

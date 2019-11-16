import React from "react";

import Avatar from "@riipen-ui/components/Avatar";

export default function Letter() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Avatar size="25px">HE</Avatar>
      <span style={style} />
      <Avatar size="50px">LL</Avatar>
      <span style={style} />
      <Avatar size="75px">O</Avatar>
    </div>
  );
}

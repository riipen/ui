import React from "react";

import Avatar from "@riipen-ui/components/Avatar";

export default function Letter() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Avatar size="50px">L</Avatar>
      <span style={style} />
      <Avatar size="50px">U</Avatar>
      <span style={style} />
      <Avatar size="50px">LZ</Avatar>
    </div>
  );
}

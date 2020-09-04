import React from "react";

import Avatar from "riipen-ui/components/Avatar";

export default function Letter() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Avatar alt="HE" size="25px">
        HE
      </Avatar>
      <span style={style} />
      <Avatar alt="LL" size="50px">
        LL
      </Avatar>
      <span style={style} />
      <Avatar alt="O" size="75px">
        O
      </Avatar>
    </div>
  );
}

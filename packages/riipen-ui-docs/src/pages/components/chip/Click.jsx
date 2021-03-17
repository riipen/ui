import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Click() {
  const clicked = () => {
    // eslint-disable-next-line no-alert
    alert("Clicked");
  };

  return <Chip onClick={clicked} color="secondary" label="Click Me" />;
}

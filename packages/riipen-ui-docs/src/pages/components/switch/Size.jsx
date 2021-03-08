import React from "react";

import Switch from "riipen-ui/components/Switch";

export default function Switches() {
  return (
    <div>
      <Switch checked color="primary" size="small" readOnly />
      <Switch checked color="secondary" size="medium" readOnly />
    </div>
  );
}

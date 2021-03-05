import React from "react";

import Switch from "riipen-ui/components/Switch";

export default function Switches() {
  return (
    <div>
      <Switch checked color="primary" />
      <Switch checked color="secondary" />
      <Switch checked color="tertiary" />
      <Switch checked color="positive" />
      <Switch checked color="negative" />
      <Switch color="primary" disabled label="disabled" />
    </div>
  );
}

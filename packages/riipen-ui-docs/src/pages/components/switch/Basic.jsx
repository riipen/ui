import React from "react";

import Switch from "riipen-ui/components/Switch";

export default function Switches() {
  const [state, setState] = React.useState({
    checked: false
  });

  const handleChange = e => {
    setState({ ...state, checked: e.target.checked });
  };

  return (
    <div>
      <Switch checked={state.checked} color="primary" onChange={handleChange} />
      <Switch checked color="secondary" readOnly />
      <Switch checked color="tertiary" readOnly />
      <Switch checked color="positive" readOnly />
      <Switch checked color="negative" readOnly />
      <Switch color="primary" disabled />
    </div>
  );
}

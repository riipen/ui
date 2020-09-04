import React from "react";

import Tabs from "riipen-ui/components/Tabs";
import Tab from "riipen-ui/components/Tab";

export default function Disabled() {
  const style = {
    backgroundColor: "#fff"
  };

  const [state, setState] = React.useState({
    value: "one"
  });

  const handleChange = (e, value) => {
    setState({ ...state, value });
  };

  return (
    <div style={style}>
      <Tabs onChange={handleChange} value={state.value}>
        <Tab label="Item one" value="one" />
        <Tab disabled label="Item two" value="two" />
        <Tab label="Item three" value="three" />
      </Tabs>
    </div>
  );
}

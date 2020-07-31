import React from "react";

import Tabs from "@riipen-ui/components/Tabs";
import Tab from "@riipen-ui/components/Tab";

export default function Forced() {
  const vertical = {
    backgroundColor: "#fff",
    width: "200px",
    display: "inline-block"
  };

  const horizontal = {
    backgroundColor: "#fff",
    display: "inline-block",
    margin: "0 40px"
  };

  const [state, setState] = React.useState({
    value: "one/one"
  });

  const handleChange = (e, value) => {
    setState({ ...state, value });
  };

  const firstPart = state.value.split("/")[0];

  return (
    <div>
      <div style={vertical}>
        <Tabs
          onChange={handleChange}
          orientation="vertical"
          value={state.value}
        >
          <Tab label="Item one" value="one" active={firstPart === "one"} />
          <Tab label="Item two" value="two" active={firstPart === "two"} />
        </Tabs>
      </div>
      <div style={horizontal}>
        {firstPart === "one" && (
          <Tabs onChange={handleChange} value={state.value}>
            <Tab label="Item one one" value="one/one" />
            <Tab label="Item one two" value="one/two" />
          </Tabs>
        )}
        {firstPart === "two" && (
          <Tabs onChange={handleChange} value={state.value}>
            <Tab label="Item two one" value="two/one" />
            <Tab label="Item two two" value="two/two" />
          </Tabs>
        )}
      </div>
    </div>
  );
}

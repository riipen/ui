import React from "react";

import Form from "riipen-ui/components/Form";
import Toggle from "riipen-ui/components/Toggle";

export default function Color() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    default: "left",
    primary: "left",
    secondary: "left",
    tertiary: "left"
  });

  const handleChange = color => value => {
    setState({
      ...state,
      [color]: value
    });
  };

  const options = [
    {
      label: "left",
      value: "left"
    },
    {
      label: "right",
      value: "right"
    }
  ];

  return (
    <Form>
      <Toggle
        value={state.default}
        options={options}
        name="default"
        label="default"
        onChange={handleChange("default")}
        color="default"
      />
      <div style={style} />
      <Toggle
        value={state.primary}
        options={options}
        name="primary"
        label="primary"
        onChange={handleChange("primary")}
        color="primary"
      />
      <div style={style} />
      <Toggle
        value={state.secondary}
        options={options}
        label="secondary"
        name="secondary"
        onChange={handleChange("secondary")}
        color="secondary"
      />
      <div style={style} />
      <Toggle
        value={state.tertiary}
        options={options}
        label="tertiary"
        name="tertiary"
        onChange={handleChange("tertiary")}
        color="tertiary"
      />
    </Form>
  );
}

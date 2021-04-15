import React from "react";

import Form from "riipen-ui/components/Form";
import Toggle from "riipen-ui/components/Toggle";

export default function Size() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    small: "left",
    medium: "left",
    large: "left"
  });

  const handleChange = size => value => {
    setState({
      ...state,
      [size]: value
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
        value={state.small}
        options={options}
        name="small"
        label="small"
        onChange={handleChange("small")}
        size="small"
      />
      <div style={style} />
      <Toggle
        value={state.medium}
        options={options}
        name="medium"
        label="medium"
        onChange={handleChange("medium")}
        size="medium"
      />
      <div style={style} />
      <Toggle
        value={state.large}
        options={options}
        label="large"
        name="large"
        onChange={handleChange("large")}
        size="large"
      />
    </Form>
  );
}

import React from "react";

import Form from "riipen-ui/components/Form";
import Toggle from "riipen-ui/components/Toggle";

export default function Label() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    hint: "left",
    required: "left"
  });

  const handleChange = variant => value => {
    setState({
      ...state,
      [variant]: value
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
        value={state.hint}
        options={options}
        name="hint"
        label="hint"
        onChange={handleChange("hint")}
        hint="a helpful hint"
      />
      <div style={style} />
      <Toggle
        value={state.required}
        options={options}
        name="required"
        label="required"
        onChange={handleChange("required")}
        required
      />
    </Form>
  );
}

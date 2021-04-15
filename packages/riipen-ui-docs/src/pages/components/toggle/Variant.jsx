import React from "react";

import Form from "riipen-ui/components/Form";
import Toggle from "riipen-ui/components/Toggle";

export default function Variant() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    joined: "left",
    spaced: "left"
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
        value={state.joined}
        options={options}
        name="joined"
        label="joined"
        onChange={handleChange("joined")}
        variant="joined"
      />
      <div style={style} />
      <Toggle
        value={state.spaced}
        options={options}
        name="spaced"
        label="spaced"
        onChange={handleChange("spaced")}
        variant="spaced"
      />
    </Form>
  );
}

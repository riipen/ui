import React from "react";

import Form from "riipen-ui/components/Form";
import Toggle from "riipen-ui/components/Toggle";

export default function Usage() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState(1);

  const handleChange = value => {
    setState(value);
  };

  const options = [
    {
      label: "first",
      value: 1
    },
    {
      label: "second",
      value: 2
    },
    {
      label: "third",
      value: 3
    }
  ];

  return (
    <Form>
      <Toggle
        value={state}
        options={options}
        name="toggle"
        label="toggle"
        onChange={handleChange}
      />
      <div style={style} />
    </Form>
  );
}

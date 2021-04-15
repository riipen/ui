import React from "react";

import Form from "riipen-ui/components/Form";
import Toggle from "riipen-ui/components/Toggle";

export default function Disable() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    disabled: "left",
    disabledOptions: "left"
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
      label: "center",
      value: "center"
    },
    {
      label: "right",
      value: "right"
    }
  ];

  const disabledOptions = [
    {
      label: "left",
      value: "left"
    },
    {
      label: "center",
      value: "center",
      disabled: true
    },
    {
      label: "right",
      value: "right"
    }
  ];

  return (
    <Form>
      <Toggle
        value={state.disabled}
        options={options}
        name="disabled"
        label="disabled"
        onChange={handleChange("disabled")}
        disabled
      />
      <div style={style} />
      <Toggle
        value={state.disabledOptions}
        options={disabledOptions}
        name="disabledOptions"
        label="disabled options"
        onChange={handleChange("disabledOptions")}
      />
    </Form>
  );
}

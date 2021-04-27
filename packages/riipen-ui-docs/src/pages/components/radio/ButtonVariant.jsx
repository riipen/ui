import React from "react";

import Form from "riipen-ui/components/Form";
import RadioButton from "riipen-ui/components/RadioButton";
import RadioButtonGroup from "riipen-ui/components/RadioButtonGroup";

export default function ButtonVariant() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    connected: "left",
    separate: "left"
  });

  const handleChange = variant => (e, value) => {
    setState({
      ...state,
      [variant]: value
    });
  };

  return (
    <Form>
      <RadioButtonGroup
        label="Connected"
        value={state.connected}
        variant="connected"
        onChange={handleChange("connected")}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
      <div style={style} />
      <RadioButtonGroup
        label="Separate"
        variant="separate"
        value={state.separate}
        onChange={handleChange("separate")}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
    </Form>
  );
}

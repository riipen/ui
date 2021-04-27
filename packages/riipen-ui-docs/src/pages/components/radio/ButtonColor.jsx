import React from "react";

import Form from "riipen-ui/components/Form";
import RadioButton from "riipen-ui/components/RadioButton";
import RadioButtonGroup from "riipen-ui/components/RadioButtonGroup";

export default function ButtonColor() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    default: "left",
    primary: "left",
    secondary: "left",
    tertiary: "left"
  });

  const handleChange = color => (e, value) => {
    setState({
      ...state,
      [color]: value
    });
  };

  return (
    <Form>
      <RadioButtonGroup
        color="default"
        label="Default"
        onChange={handleChange("default")}
        value={state.default}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
      <div style={style} />
      <RadioButtonGroup
        color="primary"
        label="Primary"
        onChange={handleChange("primary")}
        value={state.primary}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
      <div style={style} />
      <RadioButtonGroup
        color="secondary"
        label="Secondary"
        onChange={handleChange("secondary")}
        value={state.secondary}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
      <div style={style} />
      <RadioButtonGroup
        color="tertiary"
        label="Tertiary"
        onChange={handleChange("tertiary")}
        value={state.tertiary}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
    </Form>
  );
}

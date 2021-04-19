import React from "react";

import Form from "riipen-ui/components/Form";
import RadioButton from "riipen-ui/components/RadioButton";
import RadioButtonGroup from "riipen-ui/components/RadioButtonGroup";

export default function ButtonSize() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    small: "left",
    medium: "left",
    large: "left"
  });

  const handleChange = size => (e, value) => {
    setState({
      ...state,
      [size]: value
    });
  };

  return (
    <Form>
      <RadioButtonGroup
        value={state.small}
        label="Small"
        size="small"
        onChange={handleChange("small")}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
      <div style={style} />
      <RadioButtonGroup
        value={state.medium}
        size="medium"
        label="Medium"
        onChange={handleChange("medium")}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
      <div style={style} />
      <RadioButtonGroup
        value={state.large}
        size="large"
        label="Large"
        onChange={handleChange("large")}
      >
        <RadioButton label="Left" value="left" />
        <RadioButton label="Right" value="right" />
      </RadioButtonGroup>
    </Form>
  );
}

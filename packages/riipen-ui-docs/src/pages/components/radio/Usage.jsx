import React from "react";

import Form from "@riipen-ui/components/Form";
import Radio from "@riipen-ui/components/Radio";
import RadioGroup from "@riipen-ui/components/RadioGroup";

export default function Usage() {
  const [state, setState] = React.useState({
    value: "grey"
  });

  const handleChange = (e, value) => {
    setState({ ...state, value });
  };

  return (
    <Form>
      <RadioGroup
        label="Color"
        hint="Pick your favorite color."
        onChange={handleChange}
        required
      >
        <Radio
          label="Grey"
          value="grey"
          color="default"
          checked={state.value === "grey"}
        />
        <Radio
          label="Blue"
          value="blue"
          color="primary"
          checked={state.value === "blue"}
        />
        <Radio
          label="Orange"
          value="orange"
          color="secondary"
          checked={state.value === "orange"}
        />
      </RadioGroup>
    </Form>
  );
}

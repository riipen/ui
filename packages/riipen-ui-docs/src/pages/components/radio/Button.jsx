import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Form from "riipen-ui/components/Form";
import RadioButton from "riipen-ui/components/RadioButton";
import RadioButtonGroup from "riipen-ui/components/RadioButtonGroup";

const icon = i => () => <FontAwesomeIcon icon={i} />;

export default function Button() {
  const [state, setState] = React.useState({
    value: "none"
  });

  const handleChange = (e, value) => {
    setState({ ...state, value });
  };

  return (
    <Form>
      <RadioButtonGroup
        label="Variant"
        hint="Pick your favorite variant."
        onChange={handleChange}
        required
      >
        <RadioButton
          prefix={icon(faFlag)}
          label="Prefix"
          value="prefix"
          checked={state.value === "prefix"}
        />
        <RadioButton
          suffix={icon(faFlag)}
          label="Suffix"
          value="suffix"
          checked={state.value === "suffix"}
        />
        <RadioButton
          label="None"
          value="none"
          checked={state.value === "none"}
        />
        <RadioButton
          disabled
          label="Disabled"
          value="disabled"
          checked={state.value === "disabled"}
        />
      </RadioButtonGroup>
    </Form>
  );
}

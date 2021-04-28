import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Form from "riipen-ui/components/Form";
import RadioButton from "riipen-ui/components/RadioButton";
import RadioButtonGroup from "riipen-ui/components/RadioButtonGroup";

export default function Button() {
  const [state, setState] = React.useState("none");

  const handleChange = (e, value) => setState(value);

  return (
    <Form>
      <RadioButtonGroup
        label="Variant"
        hint="Pick your favorite variant."
        onChange={handleChange}
        required
        name="buttons"
        id="button-group"
      >
        <RadioButton
          prefix={<FontAwesomeIcon icon={faFlag} />}
          label="Prefix"
          value="prefix"
          checked={state === "prefix"}
        />
        <RadioButton
          suffix={<FontAwesomeIcon icon={faFlag} />}
          label="Suffix"
          value="suffix"
          checked={state === "suffix"}
        />
        <RadioButton label="None" value="none" checked={state === "none"} />
        <RadioButton
          disabled
          label="Disabled"
          value="disabled"
          checked={state === "disabled"}
        />
      </RadioButtonGroup>
    </Form>
  );
}

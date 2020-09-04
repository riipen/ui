import React from "react";

import Form from "riipen-ui/components/Form";
import Checkbox from "riipen-ui/components/Checkbox";

export default function Usage() {
  const style = {
    marginBottom: "10px"
  };

  const [state, setState] = React.useState({
    checked: false
  });

  const handleChange = e => {
    setState({ ...state, checked: e.target.checked });
  };

  return (
    <Form>
      <Checkbox
        checked={state.checked}
        id="one"
        label="Default"
        onChange={handleChange}
      />
      <div style={style} />
      <Checkbox checked id="two" color="primary" label="Primary" readOnly />
      <div style={style} />
      <Checkbox
        checked
        id="three"
        color="secondary"
        label="Secondary"
        readOnly
      />
      <div style={style} />
      <Checkbox
        checked
        id="four"
        color="primary"
        disabled
        label="Disabled"
        readOnly
      />
    </Form>
  );
}

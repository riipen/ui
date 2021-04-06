import React from "react";

import Form from "riipen-ui/components/Form";
import Checkbox from "riipen-ui/components/Checkbox";

export default function Usage() {
  const style = {
    marginBottom: "10px"
  };

  const [defaultState, setDefaultState] = React.useState(true);
  const [chipState, setChipState] = React.useState(true);

  return (
    <Form>
      {"asda"}
      {defaultState}
      {"asda"}
      <Checkbox
        checked={defaultState}
        color="secondary"
        onChange={e => setDefaultState(e.target.checked)}
        id="defatul"
        label="default"
        variant="default"
      />
      <div style={style} />
      <Checkbox
        checked={chipState}
        color="secondary"
        onChange={e => setChipState(e.target.checked)}
        id="chip"
        label="chip"
        variant="chip"
      />
    </Form>
  );
}

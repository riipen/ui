import React from "react";

import Form from "riipen-ui/components/Form";
import Checkbox from "riipen-ui/components/Checkbox";

export default function Usage() {
  const style = {
    marginBottom: "10px"
  };

  const [chipMdState, setChipMdState] = React.useState(true);
  const [chipSmState, setChipSmState] = React.useState(true);
  const [chipXsState, setChipXsState] = React.useState(true);

  return (
    <Form>
      <Checkbox
        checked={chipMdState}
        color="primary"
        onChange={e => setChipMdState(e.target.checked)}
        id="chipmd"
        label="medium"
        variant="chip"
        size="medium"
      />
      <div style={style} />
      <Checkbox
        checked={chipSmState}
        color="secondary"
        onChange={e => setChipSmState(e.target.checked)}
        id="chipsm"
        label="small"
        variant="chip"
        size="small"
      />
      <div style={style} />
      <Checkbox
        checked={chipXsState}
        color="default"
        onChange={e => setChipXsState(e.target.checked)}
        id="chipxs"
        label="xsmall"
        variant="chip"
        size="xsmall"
      />
    </Form>
  );
}

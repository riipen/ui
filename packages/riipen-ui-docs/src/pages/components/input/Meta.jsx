import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Meta() {
  return (
    <Form>
      <Input id="default" label="Meta" meta="Character Count" />
      <div style={{ marginBottom: "10px" }} />
      <Input
        id="default"
        label="Meta"
        meta="Character Count"
        error="This is an error!"
      />
    </Form>
  );
}

import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Variant() {
  return (
    <Form>
      <Input id="name" label="Biography" variant="default" />
      <div style={{ marginBottom: "10px" }} />
      <Input id="name" label="Biography" variant="underlined" />
    </Form>
  );
}

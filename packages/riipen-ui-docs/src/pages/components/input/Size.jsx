import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Size() {
  const style = { marginBottom: "10px" };
  return (
    <Form>
      <Input id="name" label="Animal" value="Anchovy" size="small" />
      <div style={style} />
      <Input id="name" label="Animal" value="Cat" size="medium" />
      <div style={style} />
      <Input id="name" label="Animal" value="Elephant" size="large" />
    </Form>
  );
}

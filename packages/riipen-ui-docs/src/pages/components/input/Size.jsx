import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Size() {
  const style = { marginBottom: "10px" };
  return (
    <Form>
      <Input id="name" label="Small" value="Sardine" size="small" />
      <div style={style} />
      <Input id="name" label="Medium" value="Cat" size="medium" />
      <div style={style} />
      <Input id="name" label="Large" value="Elephant" size="large" />
    </Form>
  );
}

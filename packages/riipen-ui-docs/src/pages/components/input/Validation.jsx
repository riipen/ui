import React from "react";

import Form from "@riipen-ui/components/Form";
import Input from "@riipen-ui/components/Input";

export default function Props() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <Input id="name" label="Name" error="You must provide your name." />
      <div style={style} />
      <Input
        id="name"
        label="Name"
        warning="Are you sure you don't have a name?"
      />
    </Form>
  );
}

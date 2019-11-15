import React from "react";

import Form from "@riipen-ui/components/Form";
import TextField from "@riipen-ui/components/TextField";

export default function Props() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <TextField id="name" label="Name" error="You must provide your name." />
      <div style={style} />
      <TextField
        id="name"
        label="Name"
        warning="Are you sure you don't have a name?"
      />
    </Form>
  );
}

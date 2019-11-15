import React from "react";

import Form from "@riipen-ui/components/Form";
import TextField from "@riipen-ui/components/TextField";

export default function Props() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <TextField id="name" label="Name" hint="Your first and last names." />
      <div style={style} />
      <TextField id="name" label="Name" defaultValue="Jane Doe" required />
      <div style={style} />
      <TextField id="name" label="Name" disabled />
      <div style={style} />
      <TextField id="password" label="Password" type="password" />
      <div style={style} />
      <TextField id="age" label="Age" type="number" />
      <div style={style} />
      <TextField id="name" label="Name" defaultValue="Jane Doe" readOnly />
    </Form>
  );
}

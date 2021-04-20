import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";
import Typography from "riipen-ui/components/Typography";

export default function Props() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <Input id="name" label="Name" hint="Your first and last names." />
      <div style={style} />
      <Input id="name" hint="Your first and last names." />
      <div style={style} />
      <Input id="name" label="Name" defaultValue="Jane Doe" required />
      <div style={style} />
      <Input id="name" label="Name" disabled />
      <div style={style} />
      <Input id="password" label="Password" type="password" />
      <div style={style} />
      <Input id="age" label="Age" type="number" />
      <div style={style} />
      <Input
        id="name"
        label={
          <Typography color="secondary" variant="h3">
            {"Name"}
          </Typography>
        }
        defaultValue="Jane Doe"
        readOnly
      />
    </Form>
  );
}

import React from "react";

import Form from "@riipen-ui/components/Form";
import FormGroup from "@riipen-ui/components/FormGroup";
import TextField from "@riipen-ui/components/TextField";

export default function Group() {
  return (
    <Form>
      <FormGroup title="Basic information">
        <TextField
          id="name"
          label="Name"
          hint="Your first and last names."
          required
        />
      </FormGroup>
      <FormGroup
        title="Extra information"
        subtitle="All these fields are optional."
      >
        <TextField id="biography" label="Biography" multiline />
      </FormGroup>
    </Form>
  );
}

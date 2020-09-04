import React from "react";

import Form from "riipen-ui/components/Form";
import FormGroup from "riipen-ui/components/FormGroup";
import Input from "riipen-ui/components/Input";

export default function Group() {
  return (
    <Form>
      <FormGroup title="Basic information">
        <Input
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
        <Input id="biography" label="Biography" multiline />
      </FormGroup>
    </Form>
  );
}

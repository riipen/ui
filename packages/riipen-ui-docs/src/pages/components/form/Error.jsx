import React from "react";

import Form from "@riipen-ui/components/Form";
import Input from "@riipen-ui/components/Input";

export default function Basic() {
  return (
    <Form error="Please provide a name">
      <Input id="name" label="Name" hint="Your first and last names." />
    </Form>
  );
}

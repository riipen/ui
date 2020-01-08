import React from "react";

import Form from "@riipen-ui/components/Form";
import Input from "@riipen-ui/components/Input";

export default function Basic() {
  return (
    <Form>
      <Input id="name" label="Name" hint="Your first and last names." />
    </Form>
  );
}

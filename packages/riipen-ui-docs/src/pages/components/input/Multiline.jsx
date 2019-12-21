import React from "react";

import Form from "@riipen-ui/components/Form";
import Input from "@riipen-ui/components/Input";

export default function Props() {
  return (
    <Form>
      <Input id="name" label="Biography" multiline rows="5" />
    </Form>
  );
}

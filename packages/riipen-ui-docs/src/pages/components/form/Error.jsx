import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Error() {
  return (
    <Form error="Please provide a name">
      <Input name="name" label="Name" hint="Your name." />
    </Form>
  );
}

import React from "react";

import Form from "@riipen-ui/components/Form";
import TextField from "@riipen-ui/components/TextField";

export default function Basic() {
  return (
    <Form>
      <TextField id="name" label="Name" hint="Your first and last names." />
    </Form>
  );
}

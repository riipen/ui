import React from "react";

import Form from "@riipen-ui/components/Form";
import TextField from "@riipen-ui/components/TextField";

export default function Props() {
  return (
    <Form>
      <TextField id="name" label="Biography" multiline rows="5" />
    </Form>
  );
}

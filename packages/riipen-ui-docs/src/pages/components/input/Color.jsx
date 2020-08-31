import React from "react";

import Form from "@riipen-ui/components/Form";
import Input from "@riipen-ui/components/Input";

export default function Props() {
  const top = {
    backgroundColor: "darkgray",
    padding: "20px"
  };

  const bottom = {
    padding: "20px"
  };

  return (
    <Form>
      <div style={top}>
        <Input id="top" label="White" labelColor="white" />
      </div>
      <div style={bottom}>
        <Input id="bottom" label="Default" labelColor="default" />
      </div>
    </Form>
  );
}

import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Color() {
  const section = {
    display: "inline-block",
    padding: "10px",
    width: "20%"
  };

  return (
    <Form>
      <div style={section}>
        <Input id="light" label="Light" labelWeight="light" />
      </div>
      <div style={section}>
        <Input id="regular" label="Regular" labelWeight="regular" />
      </div>
      <div style={section}>
        <Input id="medium" label="Medium" labelWeight="medium" />
      </div>
      <div style={section}>
        <Input id="bold" label="Bold" labelWeight="bold" />
      </div>
    </Form>
  );
}

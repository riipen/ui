import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Color() {
  const dark = {
    backgroundColor: "#333"
  };

  const section = {
    display: "inline-block",
    padding: "10px",
    width: "25%"
  };

  return (
    <Form>
      <div style={section}>
        <Input id="default" label="Default" labelColor="default" />
      </div>
      <div style={{ ...section, ...dark }}>
        <Input id="white" label="White" labelColor="white" />
      </div>
      <div style={section}>
        <Input id="black" label="Black" labelColor="black" />
      </div>
    </Form>
  );
}

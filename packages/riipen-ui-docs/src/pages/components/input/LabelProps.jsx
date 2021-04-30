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
        <Input
          id="primary-bold"
          label="Primary Bold"
          labelProps={{ color: "primary", fontWeight: "bold", variant: "h4" }}
        />
      </div>
      <div style={section}>
        <Input
          id="light-grey"
          label="Light Grey"
          labelProps={{ color: "grey600", fontWeight: "light" }}
        />
      </div>
      <div style={section}>
        <Input
          id="small-secondary"
          label="Small Secondary"
          labelProps={{ color: "secondary", variant: "body2" }}
        />
      </div>
    </Form>
  );
}

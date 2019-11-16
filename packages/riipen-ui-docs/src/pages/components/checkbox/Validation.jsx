import React from "react";

import Form from "@riipen-ui/components/Form";
import Checkbox from "@riipen-ui/components/Checkbox";

export default function Usage() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <Checkbox id="agree" label="I agree" error="You must agree to continue" />
      <div style={style} />
      <Checkbox id="agree" label="I agree" warning="You have not agreed yet" />
    </Form>
  );
}

import React from "react";

import Form from "@riipen-ui/components/Form";
import RichTextEditor from "@riipen-ui/components/RichTextEditor";

export default function Validation() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <RichTextEditor
        id="description"
        label="Description"
        isRequired
        error="You must provide a description."
      />
      <div style={style} />
      <RichTextEditor
        id="description"
        label="Description"
        warning="Are you sure you don't want to be descriptive?"
      />
    </Form>
  );
}

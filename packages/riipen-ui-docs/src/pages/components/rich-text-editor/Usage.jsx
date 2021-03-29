import React from "react";

import Form from "riipen-ui/components/Form";
import RichTextEditor from "riipen-ui/components/RichTextEditor";

export default function Usage() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <Form>
      <RichTextEditor id="editor-basic" label="Basic" />
      <div style={style} />
      <RichTextEditor
        id="editor-whitelist"
        label="Control Whitelist"
        controlWhitelist={["header-one", "BOLD"]}
      />
      <div style={style} />
      <RichTextEditor
        id="editor-position"
        label="Control Position"
        controlPosition="bottom"
      />
      <div style={style} />
      <RichTextEditor
        id="editor-value"
        label="Initial Value"
        initialValue="hi!"
      />
      <div style={style} />
      <RichTextEditor
        id="editor-max-height"
        label="Max Height"
        maxHeight="200px"
      />
      <div style={style} />
      <RichTextEditor
        id="editor-placeholder"
        label="Placeholder"
        placeholder="I'm holding the place!"
      />
      <div style={style} />
      <RichTextEditor
        id="editor-style"
        label="Style"
        style={{ backgroundColor: "#ed7321", minHeight: "200px", opacity: 0.3 }}
      />
    </Form>
  );
}

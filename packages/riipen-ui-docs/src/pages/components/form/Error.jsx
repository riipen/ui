import React from "react";

import Form from "@riipen-ui/components/Form";
import Input from "@riipen-ui/components/Input";

export default function Basic() {
  const style = {
    marginBottom: "50px"
  };

  return (
    <div>
      <Form error="Please provide a name">
        <Input name="name" label="Name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form
        error={{
          name: "Please provide a name"
        }}
      >
        <Input name="name" label="First name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form error={["Please provide a name"]}>
        <Input name="name" label="First name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form error={[<span>Please provide a name</span>]}>
        <Input name="name" label="Name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form
        error={{
          name: <span>Please provide a name</span>
        }}
      >
        <Input name="name" label="Name" hint="Your name." />
      </Form>
    </div>
  );
}

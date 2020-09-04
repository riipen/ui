import React from "react";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";
import Typography from "riipen-ui/components/Typography";

export default function Errors() {
  const style = {
    marginBottom: "50px"
  };

  return (
    <div>
      <Form
        errors={{
          name: "Please provide a name"
        }}
      >
        <Input name="name" label="First name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form errors={["Please provide a name"]}>
        <Input name="name" label="First name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form errors={[<Typography>Please provide a name</Typography>]}>
        <Input name="name" label="Name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form
        errors={{
          name: <Typography>Please provide a name</Typography>
        }}
      >
        <Input name="name" label="Name" hint="Your name." />
      </Form>
      <div style={style} />
      <Form
        error="This form has errors:"
        errors={{
          name: "Please provide a name"
        }}
      >
        <Input name="name" label="First name" hint="Your name." />
      </Form>
    </div>
  );
}

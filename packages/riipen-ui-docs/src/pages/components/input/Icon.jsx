import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuidditch } from "@fortawesome/free-solid-svg-icons";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Icon() {
  const style = { marginBottom: "10px" };

  return (
    <Form>
      <Input
        id="name"
        label="Sports"
        icon={<FontAwesomeIcon icon={faQuidditch} />}
        size="small"
      />
      <div style={style} />
      <Input
        id="name"
        label="Sports"
        icon={<FontAwesomeIcon icon={faQuidditch} />}
        size="medium"
      />
      <div style={style} />
      <Input
        id="name"
        label="Sports"
        icon={<FontAwesomeIcon icon={faQuidditch} />}
        size="large"
      />
    </Form>
  );
}

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuidditch } from "@fortawesome/free-solid-svg-icons";

import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function Adornments() {
  const section = {
    display: "inline-block",
    padding: "10px",
    width: "25%"
  };

  return (
    <Form>
      <div style={section}>
        <Input
          id="name"
          label="Sports"
          startAdornment={<FontAwesomeIcon icon={faQuidditch} />}
          size="small"
        />
      </div>
      <div style={section}>
        <Input
          endAdornment={<FontAwesomeIcon icon={faQuidditch} />}
          id="name"
          label="Sports"
          size="small"
        />
      </div>
      <div style={{ marginBottom: "10px" }} />
      <div style={section}>
        <Input
          startAdornment={<FontAwesomeIcon icon={faQuidditch} />}
          id="name"
          label="Sports"
          size="medium"
        />
      </div>
      <div style={section}>
        <Input
          id="name"
          label="Sports"
          endAdornment={<FontAwesomeIcon icon={faQuidditch} />}
          size="medium"
        />
      </div>
      <div style={{ marginBottom: "10px" }} />
      <div style={section}>
        <Input
          startAdornment={<FontAwesomeIcon icon={faQuidditch} />}
          id="name"
          label="Sports"
          size="large"
        />
      </div>
      <div style={section}>
        <Input
          id="name"
          endAdornment={<FontAwesomeIcon icon={faQuidditch} />}
          label="Sports"
          size="large"
        />
      </div>
    </Form>
  );
}

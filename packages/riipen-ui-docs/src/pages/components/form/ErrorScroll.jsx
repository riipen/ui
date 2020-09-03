import React from "react";

import Button from "riipen-ui/components/Button";
import Form from "riipen-ui/components/Form";
import Input from "riipen-ui/components/Input";

export default function ErrorScroll() {
  const style = {
    marginBottom: "10px"
  };

  const [error, setError] = React.useState(null);

  const handleSubmit = () => {
    setError(error ? null : "There was an error submitting the form.");
  };

  return (
    <Form error={error}>
      <Input name="name" label="Name" hint="Your first and last names." />
      <div style={style} />
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

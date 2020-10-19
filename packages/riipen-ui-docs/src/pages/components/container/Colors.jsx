import React from "react";

import Container from "riipen-ui/components/Container";

export default function Colors() {
  const style = {
    padding: "10px",
    marginBottom: "10px",
    textAlign: "center"
  };

  return (
    <div>
      <Container border color="white" maxWidth="md">
        <div style={style}>white</div>
      </Container>
      <Container border color="default" maxWidth="md">
        <div style={style}>default</div>
      </Container>
    </div>
  );
}

import React from "react";

import Container from "riipen-ui/components/Container";

export default function Border() {
  const style = {
    padding: "10px",
    marginBottom: "10px",
    textAlign: "center"
  };

  return (
    <div>
      <Container maxWidth="md" border>
        <div style={style}>border</div>
      </Container>
    </div>
  );
}

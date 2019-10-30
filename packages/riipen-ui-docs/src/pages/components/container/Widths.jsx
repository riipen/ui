import React from "react";

import Container from "@riipen-ui/components/Container";

export default function Variants() {
  const style = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
    padding: "10px",
    marginBottom: "10px",
    textAlign: "center"
  };

  return (
    <div>
      <Container maxWidth="sm">
        <div style={style}>sm</div>
      </Container>
      <Container maxWidth="md">
        <div style={style}>md</div>
      </Container>
      <Container maxWidth="lg">
        <div style={style}>lg</div>
      </Container>
      <Container maxWidth="xl">
        <div style={style}>xl</div>
      </Container>
    </div>
  );
}

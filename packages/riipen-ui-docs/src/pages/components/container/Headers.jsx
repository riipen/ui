import React from "react";

import Container from "riipen-ui/components/Container";

export default function Headers() {
  const style = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.23)",
    padding: "10px",
    marginBottom: "10px",
    textAlign: "center"
  };

  return (
    <div>
      <Container
        maxWidth="md"
        headerProps={{ children: "primary", color: "primary" }}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        headerProps={{ children: "secondary", color: "secondary" }}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        headerProps={{ children: "tertiary", color: "tertiary" }}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        headerProps={{ children: "positive", color: "positive" }}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        headerProps={{ children: "negative", color: "negative" }}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        headerProps={{ children: "warning", color: "warning" }}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        headerProps={{ children: "default", color: "default" }}
      >
        <div style={style}>md</div>
      </Container>
    </div>
  );
}

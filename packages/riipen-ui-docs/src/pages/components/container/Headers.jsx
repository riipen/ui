import React from "react";

import Container from "riipen-ui/components/Container";
import ContainerHeader from "riipen-ui/components/ContainerHeader";

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
        header={<ContainerHeader color="primary">{"primary"}</ContainerHeader>}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        header={
          <ContainerHeader color="secondary">{"secondary"}</ContainerHeader>
        }
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        header={
          <ContainerHeader color="tertiary">{"tertiary"}</ContainerHeader>
        }
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        header={
          <ContainerHeader color="positive">{"positive"}</ContainerHeader>
        }
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        header={
          <ContainerHeader color="negative">{"negative"}</ContainerHeader>
        }
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        header={<ContainerHeader color="warning">{"warning"}</ContainerHeader>}
      >
        <div style={style}>md</div>
      </Container>
      <Container
        maxWidth="md"
        header={<ContainerHeader color="default">{"default"}</ContainerHeader>}
      >
        <div style={style}>md</div>
      </Container>
    </div>
  );
}

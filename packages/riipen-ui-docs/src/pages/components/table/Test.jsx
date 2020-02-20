import React from "react";

import Table from "@riipen-ui/components/Table";
import TableColumn from "@riipen-ui/components/TableColumn";

export default function Test() {
  const createEntity = (firstName, lastName, email, age) => {
    return {
      firstName,
      lastName,
      email,
      age
    };
  };

  const entities = [
    createEntity("Joanne", "Davies", "joanne.davies@riipen.com", 24),
    createEntity("Mary", "Smith", null, 32),
    createEntity("Gabrielle", null, "gabrielle.butler@riipen.com", null),
    createEntity(
      "Christopher",
      "Stewart",
      "christopher.stewart@riipen.com",
      28
    ),
    createEntity("Yvonne", "Ball", "yvonne.ball@riipen.com", 21),
    createEntity("Test", null, null, 21)
  ];

  const cell = key => entity => {
    return entity[key];
  };

  const ageCell = entity => {
    return entity.age;
  };

  return (
    <div>
      <Table entities={entities}>
        <TableColumn
          key="firstName"
          primary
          label="First Name"
          cell={cell("firstName")}
        />
        <TableColumn key="lastName" label="Last Name" cell={cell("lastName")} />
        <TableColumn key="email" label="Email" cell={cell("email")} />
        <TableColumn key="age" label="Age" cell={ageCell} />
      </Table>
    </div>
  );
}

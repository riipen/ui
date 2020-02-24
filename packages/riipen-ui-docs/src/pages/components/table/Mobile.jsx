import React from "react";

import TableGenerator from "@riipen-ui/components/TableGenerator";

export default function Mobile() {
  const style = {
    padding: "15px"
  };

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

  const columns = [
    {
      mobileHeader: true,
      header: () => <div style={style}>First Name</div>,
      cell: entity => <div style={style}>{entity.firstName}</div>
    },
    {
      header: () => <div style={style}>Last Name</div>,
      cell: entity => <div style={style}>{entity.lastName}</div>
    },
    {
      header: () => <div style={style}>Email</div>,
      cell: entity => <div style={style}>{entity.email}</div>
    },
    {
      align: "right",
      header: () => <div style={style}>Age</div>,
      cell: entity => <div style={style}>{entity.age}</div>
    }
  ];

  return (
    <div>
      <TableGenerator columns={columns} data={entities} />
    </div>
  );
}

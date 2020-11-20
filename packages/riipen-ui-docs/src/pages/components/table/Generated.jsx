import React from "react";

import TableGenerator from "riipen-ui/components/TableGenerator";
import Typography from "riipen-ui/components/Typography";

export default function Empty() {
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
      header: () => <Typography>First Name</Typography>,
      cell: entity => <Typography>{entity.firstName}</Typography>
    },
    {
      header: () => <Typography>Last Name</Typography>,
      cell: entity => <Typography>{entity.lastName}</Typography>
    },
    {
      header: () => <Typography>Email</Typography>,
      cell: entity => <Typography>{entity.email}</Typography>
    },
    {
      header: () => <Typography>Age</Typography>,
      headerProps: () => ({
        textAlign: "center"
      }),
      cell: entity => <Typography>{entity.age}</Typography>,
      cellProps: () => ({
        textAlign: "center"
      })
    }
  ];

  return <TableGenerator columns={columns} data={entities} />;
}

import React from "react";

import TableGenerator from "riipen-ui/components/TableGenerator";

export default function Mobile() {
  const [loading, setLoading] = React.useState(true);

  const createEntity = (firstName, lastName, email, age) => {
    return {
      firstName,
      lastName,
      email,
      age
    };
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

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
      header: () => "First Name",
      cell: entity => entity.firstName
    },
    {
      header: () => "Last Name",
      cell: entity => entity.lastName
    },
    {
      header: () => "Email",
      cell: entity => entity.email
    },
    {
      align: "right",
      header: () => "Age",
      cell: entity => entity.age
    }
  ];

  return (
    <div>
      <TableGenerator loading={loading} columns={columns} data={entities} />
    </div>
  );
}

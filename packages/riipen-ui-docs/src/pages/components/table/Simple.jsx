import React from "react";

import TableContainer from "@riipen-ui/components/TableContainer";
import TableHeader from "@riipen-ui/components/TableHeader";
import TableBody from "@riipen-ui/components/TableBody";
import TableRow from "@riipen-ui/components/TableRow";
import TableHeaderCell from "@riipen-ui/components/TableHeaderCell";
import TableCell from "@riipen-ui/components/TableCell";

export default function Simple() {
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

  return (
    <div>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entities.map(entity => (
            <TableRow>
              <TableCell>{entity.firstName}</TableCell>
              <TableCell>{entity.lastName}</TableCell>
              <TableCell>{entity.email}</TableCell>
              <TableCell>{entity.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </div>
  );
}

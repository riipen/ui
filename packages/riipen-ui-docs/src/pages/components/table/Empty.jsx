import React from "react";

import TableGenerator from "riipen-ui/components/TableGenerator";
import Typography from "riipen-ui/components/Typography";

export default function Generated() {
  const data = [];

  const columns = [
    {
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
      cell: entity => <Typography>{entity.age}</Typography>
    }
  ];

  const empty = (
    <div
      style={{
        padding: "30px",
        textAlign: "center"
      }}
    >
      <Typography color="grey600" variant="h5">
        The table is empty!
      </Typography>
    </div>
  );

  return <TableGenerator columns={columns} data={data} empty={empty} />;
}

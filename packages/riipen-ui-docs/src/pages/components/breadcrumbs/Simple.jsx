import React from "react";

import Breadcrumbs from "@riipen-ui/components/Breadcrumbs";
import Typography from "@riipen-ui/components/Typography";

export default function Simple() {
  return (
    <Breadcrumbs>
      <Typography>Crumb 1</Typography>
      <Typography>Crumb 2</Typography>
      <Typography color="primary">Crumb 3</Typography>
    </Breadcrumbs>
  );
}

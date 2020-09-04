import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Breadcrumbs from "riipen-ui/components/Breadcrumbs";
import Typography from "riipen-ui/components/Typography";

export default function Separator() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <div>
      <div style={style}>
        <Breadcrumbs separator="›">
          <Typography>Crumb 1</Typography>
          <Typography>Crumb 2</Typography>
          <Typography color="primary">Crumb 3</Typography>
        </Breadcrumbs>
      </div>
      <div style={style}>
        <Breadcrumbs separator={<FontAwesomeIcon icon={faChevronRight} />}>
          <Typography>Crumb 1</Typography>
          <Typography>Crumb 2</Typography>
          <Typography color="primary">Crumb 3</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

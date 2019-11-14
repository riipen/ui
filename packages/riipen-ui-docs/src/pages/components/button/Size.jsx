import React from "react";

import Button from "@riipen-ui/components/Button";

export default function Size() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Button color="default" size="small" variant="contained">
        Default
      </Button>
      <span style={style} />
      <Button color="primary" size="medium" variant="contained">
        Primary
      </Button>
      <span style={style} />
      <Button color="secondary" size="large" variant="contained">
        Secondary
      </Button>
    </div>
  );
}

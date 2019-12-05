import React from "react";

import Button from "@riipen-ui/components/Button";

export default function Outlined() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Button color="default" variant="outlined">
        Default
      </Button>
      <span style={style} />
      <Button color="primary" variant="outlined">
        Primary
      </Button>
      <span style={style} />
      <Button color="secondary" variant="outlined">
        Secondary
      </Button>
      <span style={style} />
      <Button color="tertiary" variant="outlined">
        Tertiary
      </Button>
      <span style={style} />
      <Button color="white" variant="outlined">
        White
      </Button>
      <span style={style} />
      <Button color="default" variant="outlined" disabled>
        Disabled
      </Button>
      <span style={style} />
      <Button color="default" variant="outlined" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

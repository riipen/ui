import React from "react";

import Button from "@riipen-ui/components/Button";

export default function Contained() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Button color="default" variant="contained">
        Default
      </Button>
      <span style={style} />
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <span style={style} />
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <span style={style} />
      <Button color="tertiary" variant="contained">
        Tertiary
      </Button>
      <span style={style} />
      <Button color="white" variant="contained">
        White
      </Button>
      <span style={style} />
      <Button color="positive" variant="contained">
        Positive
      </Button>
      <span style={style} />
      <Button color="negative" variant="contained">
        Negative
      </Button>
      <span style={style} />
      <Button color="default" variant="contained" disabled>
        Disabled
      </Button>
      <span style={style} />
      <Button color="default" variant="contained" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

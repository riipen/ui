import React from "react";

import Button from "riipen-ui/components/Button";

export default function Contained() {
  const style = {
    margin: "5px"
  };

  return (
    <div>
      <Button style={style} color="default" variant="inverted">
        Default
      </Button>

      <Button style={style} color="primary" variant="inverted">
        Primary
      </Button>

      <Button style={style} color="secondary" variant="inverted">
        Secondary
      </Button>

      <Button style={style} color="tertiary" variant="inverted">
        Tertiary
      </Button>

      <Button style={style} color="positive" variant="inverted">
        Positive
      </Button>

      <Button style={style} color="negative" variant="inverted">
        Negative
      </Button>

      <Button style={style} variant="inverted" disabled>
        Disabled
      </Button>
    </div>
  );
}

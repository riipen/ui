import React from "react";

import Button from "@riipen-ui/components/Button";

export default function Text() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Button color="default" variant="text">
        Default
      </Button>
      <span style={style} />
      <Button color="primary" variant="text">
        Primary
      </Button>
      <span style={style} />
      <Button color="secondary" variant="text">
        Secondary
      </Button>
      <span style={style} />
      <Button color="tertiary" variant="text">
        Tertiary
      </Button>
      <span style={style} />
      <Button color="white" variant="text">
        White
      </Button>
      <span style={style} />
      <Button color="default" variant="text" disabled>
        Disabled
      </Button>
      <span style={style} />
      <Button color="default" variant="text" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

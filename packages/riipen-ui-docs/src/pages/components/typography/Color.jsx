import React from "react";

import Typography from "riipen-ui/components/Typography";

export default function Color() {
  return (
    <div>
      <Typography color="initial" gutter>
        Initial
      </Typography>
      <Typography color="primary" gutter>
        Primary
      </Typography>
      <Typography color="secondary" gutter>
        Secondary
      </Typography>
      <Typography color="tertiary" gutter>
        Tertiary
      </Typography>
      <Typography color="positive" gutter>
        Positive
      </Typography>
      <Typography color="negative" gutter>
        Negative
      </Typography>
    </div>
  );
}

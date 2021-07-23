import React from "react";

import Typography from "riipen-ui/components/Typography";

export default function Color() {
  return (
    <div>
      <Typography color="initial" gutter>
        Initial
      </Typography>
      <Typography color="black" gutter>
        Black
      </Typography>
      <Typography color="disabled" gutter>
        Disabled
      </Typography>
      <Typography color="grey500" gutter>
        Grey 500
      </Typography>
      <Typography color="grey600" gutter>
        Grey 600
      </Typography>
      <Typography color="grey800" gutter>
        Grey 800
      </Typography>
      <Typography color="greyA400" gutter>
        Grey A400
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
      <Typography color="warning" gutter>
        Warning
      </Typography>
      <div style={{ backgroundColor: "#000" }}>
        <Typography color="white" gutter>
          White
        </Typography>
      </div>
    </div>
  );
}

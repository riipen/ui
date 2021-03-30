import React from "react";

import Typography from "riipen-ui/components/Typography";

export default function TextTransform() {
  return (
    <div>
      <Typography textTransform="capitalize" gutter>
        capitalize
      </Typography>
      <Typography textTransform="uppercase" gutter>
        uppercase
      </Typography>
      <Typography textTransform="lowercase" gutter>
        lowercase
      </Typography>
      <Typography textTransform="full-width" gutter>
        full-width
      </Typography>
      <Typography textTransform="full-size-kana" gutter>
        full-size-kana
      </Typography>
    </div>
  );
}

import React from "react";

import Typography from "riipen-ui/components/Typography";

export default function FontWeight() {
  return (
    <div>
      <Typography fontWeight="bold" gutter>
        Bold
      </Typography>
      <Typography fontWeight="medium" gutter>
        Medium
      </Typography>
      <Typography fontWeight="regular" gutter>
        Regular
      </Typography>
      <Typography fontWeight="light" gutter>
        Light
      </Typography>
    </div>
  );
}

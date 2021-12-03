import React from "react";

import Typography from "riipen-ui/components/Typography";

export default function TextTransform() {
  return (
    <div>
      <Typography wordBreak="break-all" gutter>
        {"breakall".repeat(30)}
      </Typography>
      <Typography wordBreak="break-word" gutter>
        {"breakword".repeat(30)}
      </Typography>
      <Typography wordBreak="normal" gutter>
        {"normal".repeat(30)}
      </Typography>
    </div>
  );
}

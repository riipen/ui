import React from "react";

import ProgressBar from "@riipen-ui/components/ProgressBar";

export default function Unfilled() {
  return (
    <div>
      <ProgressBar color="primary" unfilled="light" completion={0.3} />
      <ProgressBar color="primary" unfilled="dark" completion={0.3} />
    </div>
  );
}

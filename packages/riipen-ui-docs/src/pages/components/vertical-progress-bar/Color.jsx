import React from "react";

import VerticalProgressBar from "riipen-ui/components/VerticalProgressBar";

export default function Color() {
  return (
    <VerticalProgressBar
      progresses={[
        { color: "positive" },
        { color: "warning" },
        { color: "positive" },
        { color: "default" }
      ]}
    />
  );
}

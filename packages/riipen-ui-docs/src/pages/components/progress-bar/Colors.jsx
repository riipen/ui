import React from "react";

import ProgressBar from "riipen-ui/components/ProgressBar";

export default function Colors() {
  return (
    <div>
      <ProgressBar color="primary" completion={0.3} />
      <ProgressBar color="secondary" completion={0.4} />
      <ProgressBar color="tertiary" completion={0.5} />
      <ProgressBar color="positive" completion={0.6} />
      <ProgressBar color="negative" completion={0.7} />
      <ProgressBar color="warning" completion={0.8} />
    </div>
  );
}

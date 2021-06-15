import React from "react";

import VerticalProgressBar from "riipen-ui/components/VerticalProgressBar";
import VerticalProgressBarItem from "riipen-ui/components/VerticalProgressBarItem";

export default function Color() {
  return (
    <VerticalProgressBar>
      <VerticalProgressBarItem color="positive" />
      <VerticalProgressBarItem color="warning" />
      <VerticalProgressBarItem color="positive" />
      <VerticalProgressBarItem color="default" />
    </VerticalProgressBar>
  );
}

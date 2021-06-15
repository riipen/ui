import { faChevronRight, faAtom } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import VerticalProgressBar from "riipen-ui/components/VerticalProgressBar";
import VerticalProgressBarItem from "riipen-ui/components/VerticalProgressBarItem";

export default function Icon() {
  return (
    <VerticalProgressBar>
      <VerticalProgressBarItem color="positive" icon={faAtom} />
      <VerticalProgressBarItem color="positive" icon={faChevronRight} />
      <VerticalProgressBarItem color="positive" icon={faAtom} />
      <VerticalProgressBarItem color="positive" icon={faChevronRight} />
    </VerticalProgressBar>
  );
}

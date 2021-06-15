import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import VerticalProgressBar from "riipen-ui/components/VerticalProgressBar";
import VerticalProgressBarItem from "riipen-ui/components/VerticalProgressBarItem";

export default function Content() {
  return (
    <VerticalProgressBar>
      <VerticalProgressBarItem color="positive" icon={faChevronRight}>
        content 1
      </VerticalProgressBarItem>
      <VerticalProgressBarItem color="warning" icon={faChevronRight}>
        content 2
      </VerticalProgressBarItem>
      <VerticalProgressBarItem color="warning" icon={faChevronRight}>
        content 3
      </VerticalProgressBarItem>
      <VerticalProgressBarItem color="warning" icon={faChevronRight}>
        content 4
      </VerticalProgressBarItem>
    </VerticalProgressBar>
  );
}

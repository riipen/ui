import React from "react";

import VerticalProgressBar from "riipen-ui/components/VerticalProgressBar";

import { faChevronRight, faAtom } from "@fortawesome/free-solid-svg-icons";

export default function Icon() {
  return (
    <VerticalProgressBar
      progresses={[
        { icon: faAtom, color: "positive" },
        { icon: faChevronRight, color: "positive" },
        { icon: faAtom, color: "positive" },
        { icon: faChevronRight, color: "positive" }
      ]}
    />
  );
}

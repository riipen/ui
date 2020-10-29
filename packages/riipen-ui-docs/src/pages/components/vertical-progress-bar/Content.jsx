import React from "react";

import VerticalProgressBar from "riipen-ui/components/VerticalProgressBar";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <VerticalProgressBar
      progresses={[
        {
          icon: faChevronRight,
          color: "positive",
          children: "content 1"
        },
        {
          icon: faChevronRight,
          color: "positive",
          children: "content 2"
        },
        {
          icon: faChevronRight,
          color: "positive",
          children: "content 3"
        },
        {
          icon: faChevronRight,
          color: "positive",
          children: "content 4"
        }
      ]}
    />
  );
}

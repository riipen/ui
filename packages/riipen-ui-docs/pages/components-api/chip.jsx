import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /chip.md$/);

export default function Page() {
  return (
    <MarkdownPage path="pages/components-api/chip" req={req} title="Chip API" />
  );
}

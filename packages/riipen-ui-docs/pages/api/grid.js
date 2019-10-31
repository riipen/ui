import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/api",
  false,
  /grid.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/api/grid"
      req={req}
    />
  );
}

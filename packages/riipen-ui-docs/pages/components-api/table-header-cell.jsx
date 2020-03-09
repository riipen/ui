import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /table-header-cell.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/table-header-cell"
      req={req}
    />
  );
}

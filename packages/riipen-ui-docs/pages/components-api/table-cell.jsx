import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /table-cell.md$/
);

export default function Page() {
  return <MarkdownPage path="pages/components-api/table-cell" req={req} />;
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /table-header.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/table-header"
      req={req}
      title="Table Header API"
    />
  );
}

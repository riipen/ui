import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /table-generator.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/table-generator"
      req={req}
      title="Table Generator API"
    />
  );
}

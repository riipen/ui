import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /list.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/list"
      req={req}
      title="List API"
    />
  );
}

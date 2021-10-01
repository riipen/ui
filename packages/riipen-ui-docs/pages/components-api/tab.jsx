import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /tab.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/tab"
      req={req}
      title="Tab API"
    />
  );
}

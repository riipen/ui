import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/api",
  false,
  /list-item.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/api/list-item"
      req={req}
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /input.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/input"
      req={req}
      title="Input API"
    />
  );
}

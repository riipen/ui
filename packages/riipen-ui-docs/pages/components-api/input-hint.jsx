import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /input-hint.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/input-hint"
      req={req}
    />
  );
}

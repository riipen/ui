import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /input-label.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/input-label"
      req={req}
      title="Input Label API"
    />
  );
}

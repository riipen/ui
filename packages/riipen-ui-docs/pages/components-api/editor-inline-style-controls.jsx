import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /editor-inline-style-controls.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/editor-inline-style-controls"
      req={req}
      title="Editor Inline Style Controls API"
    />
  );
}

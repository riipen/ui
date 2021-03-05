import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /editor.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/editor"
      req={req}
      title="Editor API"
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /rich-text-editor.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/rich-text-editor"
      req={req}
      title="Rich Text Editor API"
    />
  );
}

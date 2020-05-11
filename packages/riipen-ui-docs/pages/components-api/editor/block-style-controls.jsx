import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api/editor",
  false,
  /block-style-controls.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api//editorblock-style-controls"
      req={req}
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api/editor",
  false,
  /image.md$/
);

export default function Page() {
  return <MarkdownPage path="pages/components-api//editorimage" req={req} />;
}

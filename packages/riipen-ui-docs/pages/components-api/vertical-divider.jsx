import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /vertical-divider.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/vertical-divider"
      req={req}
      title="Vertical Divider API"
    />
  );
}

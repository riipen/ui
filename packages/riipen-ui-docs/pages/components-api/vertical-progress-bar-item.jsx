import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /vertical-progress-bar-item.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/vertical-progress-bar-item"
      req={req}
      title="Vertical Progress Bar Item API"
    />
  );
}

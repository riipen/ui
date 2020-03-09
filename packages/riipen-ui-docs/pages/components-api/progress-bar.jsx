import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /progress-bar.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/progress-bar"
      req={req}
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /click-away.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/click-away"
      req={req}
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /button-base.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/button-base"
      req={req}
      title="Button Base API"
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /toggle.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/toggle"
      req={req}
      title="Toggle API"
    />
  );
}

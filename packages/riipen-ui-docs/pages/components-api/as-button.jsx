import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /as-button.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/as-button"
      req={req}
      title="As Button API"
    />
  );
}

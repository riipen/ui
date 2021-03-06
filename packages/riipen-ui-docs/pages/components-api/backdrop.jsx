import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /backdrop.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/backdrop"
      req={req}
      title="Backdrop API"
    />
  );
}

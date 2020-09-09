import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /collapse.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/collapse"
      req={req}
      title="Collapse API"
    />
  );
}

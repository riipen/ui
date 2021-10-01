import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /popover.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/popover"
      req={req}
      title="Popover API"
    />
  );
}

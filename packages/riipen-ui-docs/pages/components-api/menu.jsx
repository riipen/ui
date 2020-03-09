import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /menu.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/menu"
      req={req}
    />
  );
}

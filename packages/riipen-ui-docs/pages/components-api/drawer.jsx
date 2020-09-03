import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /drawer.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/drawer"
      req={req}
      title="Drawer API"
    />
  );
}

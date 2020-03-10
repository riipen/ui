import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /table.md$/);

export default function Page() {
  return <MarkdownPage path="pages/components-api/table" req={req} />;
}

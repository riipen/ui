import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /button-icon.md$/
);

export default function Page() {
  return <MarkdownPage path="pages/components-api/button-icon" req={req} />;
}

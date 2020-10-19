import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /container-header.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/container-header"
      req={req}
      title="Container Header API"
    />
  );
}

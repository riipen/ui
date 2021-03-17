import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /spinner-clip.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/spinner-clip"
      req={req}
      title="Spinner Clip API"
    />
  );
}

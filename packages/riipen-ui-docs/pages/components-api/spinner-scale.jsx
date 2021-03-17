import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /spinner-scale.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/spinner-scale"
      req={req}
      title="Spinner Scale API"
    />
  );
}

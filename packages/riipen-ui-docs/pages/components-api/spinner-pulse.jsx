import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /spinner-pulse.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/spinner-pulse"
      req={req}
      title="Spinner Pulse API"
    />
  );
}

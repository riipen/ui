import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /accordion-summary.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/accordion-summary"
      req={req}
      title="Accordion Summary API"
    />
  );
}

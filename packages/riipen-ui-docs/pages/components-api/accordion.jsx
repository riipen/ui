import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /accordion.md$/);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/accordion"
      req={req}
      title="Accordion API"
    />
  );
}

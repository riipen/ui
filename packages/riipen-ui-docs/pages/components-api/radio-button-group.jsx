import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /radio-button-group.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/radio-button-group"
      req={req}
      title="Radio Button Group API"
    />
  );
}

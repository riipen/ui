import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /radio-button.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/radio-button"
      req={req}
      title="Radio Button API"
    />
  );
}

import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /radio.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/radio"
      req={req}
      title="Radio API"
    />
  );
}

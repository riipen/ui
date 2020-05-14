import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api/editor",
  false,
  /control-button.md$/
);

export default function Page() {
  return (
    <MarkdownPage path="pages/components-api/editor/control-button" req={req} />
  );
}

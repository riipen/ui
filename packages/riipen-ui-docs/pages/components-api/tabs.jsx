import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/components-api", false, /tabs.md$/);

export default function Page() {
  return (
    <MarkdownPage path="pages/components-api/tabs" req={req} title="Tabs API" />
  );
}

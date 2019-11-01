import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context("src/pages/home", false, /home.md$/);

export default function Page() {
  return <MarkdownPage path="pages/home" req={req} />;
}

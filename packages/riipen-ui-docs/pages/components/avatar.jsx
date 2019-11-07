import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components/avatar",
  false,
  /\.(md|js|jsx)$/
);

const reqSource = require.context(
  "!raw-loader!../../src/pages/components/avatar",
  false,
  /\.(js|jsx)$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components/avatar"
      req={req}
      reqSource={reqSource}
    />
  );
}

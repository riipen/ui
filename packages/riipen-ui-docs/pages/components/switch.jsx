import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components/switch",
  false,
  /\.(md|js|jsx)$/
);

const reqSource = require.context(
  "!raw-loader!../../src/pages/components/switch",
  false,
  /\.(js|jsx)$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components/switch"
      req={req}
      reqSource={reqSource}
      title="Switch"
    />
  );
}

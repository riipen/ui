import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components/rich-text-editor",
  false,
  /\.(md|js|jsx)$/
);

const reqSource = require.context(
  "!raw-loader!../../src/pages/components/rich-text-editor",
  false,
  /\.(js|jsx)$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components/rich-text-editor"
      req={req}
      reqSource={reqSource}
    />
  );
}

import React from 'react';

import MarkdownPage from 'docs/src/modules/components/MarkdownPage';

const req = require.context('docs/src/pages/customization/components', false, /\.(md|js|jsx)$/);

const reqSource = require.context(
  '!raw-loader!../../src/pages/customization/components',
  false,
  /\.(js|jsx)$/,
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/customization/components"
      req={req}
      reqSource={reqSource}
    />
  );
}

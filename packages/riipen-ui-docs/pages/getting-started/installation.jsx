import React from 'react';

import MarkdownPage from 'src/modules/components/MarkdownPage';

const req = require.context('src/pages/getting-started/installation', false, /\.(md|js|jsx)$/);

const reqSource = require.context(
  '!raw-loader!../../src/pages/getting-started/installation',
  false,
  /\.(js|jsx)$/,
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/getting-started/installation"
      req={req}
      reqSource={reqSource}
    />
  );
}

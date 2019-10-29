import React from 'react';

import MarkdownPage from 'src/modules/components/MarkdownPage';

const req = require.context('src/pages/components/grid', false, /\.(md|js|jsx)$/);

const reqSource = require.context(
  '!raw-loader!../../src/pages/components/grid',
  false,
  /\.(js|jsx)$/,
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components/grid"
      req={req}
      reqSource={reqSource}
    />
  );
}

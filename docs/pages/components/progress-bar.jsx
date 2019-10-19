import React from 'react';

import MarkdownPage from 'src/modules/components/MarkdownPage';

const req = require.context('src/pages/components/progress-bar', false, /\.(md|js|jsx)$/);

const reqSource = require.context(
  '!raw-loader!../../src/pages/components/progress-bar',
  false,
  /\.(js|jsx)$/,
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components/progress-bar"
      req={req}
      reqSource={reqSource}
    />
  );
}

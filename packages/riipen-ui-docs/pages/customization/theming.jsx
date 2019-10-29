import React from 'react';

import MarkdownPage from 'docs/src/modules/components/MarkdownPage';

const req = require.context('docs/src/pages/customization/theming', false, /\.(md|js|jsx)$/);

const reqSource = require.context(
  '!raw-loader!../../src/pages/customization/theming',
  false,
  /\.(js|jsx)$/,
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/customization/theming"
      req={req}
      reqSource={reqSource}
    />
  );
}

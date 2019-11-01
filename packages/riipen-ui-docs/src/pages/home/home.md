# Riipen UI

React components for easier web development. Build your
applications to spec with Riipen-UI.

## Installation

Install Riipen-UI's source files via npm. We take care of
injecting the CSS needed.

```sh
$ npm install @riipen-ui
```

Load the default Roboto font.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

[Installation docs](/getting-started/installation)

## Usage

Riipen-UI components work without any additional setup, and
don't pollute the global scope.

```jsx
import React from 'react';

import Button from '@riipen-ui/Button';

const App = () => (
  <Button color="primary">
    Hello World
  </Button>
);
```

[Usage docs](/getting-started/usage)
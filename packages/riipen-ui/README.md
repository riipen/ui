# Riipen-UI

Riipen React component UI kit.

## Installation

Riipen-UI is available as an [npm package](https://www.npmjs.com/package/riipen-ui).

```sh
// with npm
$ npm install riipen-ui

// with yarn
$ yarn add riipen-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:


```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'riipen-ui/components/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Documentation

Check out our [documentation website](https://ui.riipen.com).

## Releases

In order to release the current version run `npm run release` from the `master` or `staging` branches.

If ran on the master branch it will release a patch (x.y.z)
If ran on the staging branch it will release a prerelease (x.y.z-#)

Releases for minor or major builds will still need to be done manually.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

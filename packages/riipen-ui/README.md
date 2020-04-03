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

## Local development in tandem with another project

Build the project
```sh
npm run build
```

Create a symlink from the build directory
```sh
cd ./build
npm link
```

In the other project (web/admin) grab the symlink
```sh
cd $OTHER_PROJECT
npm link riipen-ui
```

NOTE: Running npm install in the $OTHER_PROJECT directory will remove the symlink

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

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

# Riipen-UI

Riipen React component UI kit.

## Installation

Riipen-UI is available as an [npm package](https://www.npmjs.com/package/riipen-ui).

```sh
// with npm
$ npm install @riipen-ui

// with yarn
$ yarn add @riipen-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:


```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'riipen-ui/core/Button';

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

Check out our [documentation website](#).

## Development

### Node

1. Install `nvm` via the instructions [here](https://github.com/nvm-sh/nvm#installation-and-update), something like:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/${VERSION}/install.sh | bash
```

2. Install the latest node LTS release:

```bash
$ nvm install --lts
$ nvm use --lts
```

3. Upgrade npm and install local dependencies:
```bash
$ npm install npm@latest -g
$ npm install
```

4. Install lerna and bootstrap:
```bash
$ npm install lerna -g
$ lerna bootstrap
```

### Documentation server

To run the documentation server:

```bash
$ cd packages/riipen-ui-docs
$ npm start
```

You can visit the server locally at `http://localhost:3000`.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

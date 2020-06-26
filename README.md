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

3. Upgrade npm to latest version:

```bash
$ npm install npm@latest -g
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

## Deployment

### Documentation

To deploy the documentation server on GitHub Pages:

```bash
$ git push origin production
```

## Version Update

In order to update the version run `npm run release` from the `master` or `staging` branches

If ran on the master branch it will release a patch (x.y.z)
If ran on the staging branch it will release a prerelease (x.y.z-#)

Version updates for minor or major builds will still need to be done manually

## License

This project is licensed under the terms of the [MIT license](/LICENSE).

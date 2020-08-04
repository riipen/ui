# UI

A monorepository containing the Riipen UI kit and its documentation.

## Setup

These setup instructions should work for macOS and linux. It is assumed you know how to download / install packages in your linux distribution of choice if that is your decision.

## Development

### Node

1. Install `nvm` via the instructions [here](https://github.com/nvm-sh/nvm#installation-and-update), something like:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/${VERSION}/install.sh | bash
```

2. Install `node 14.x.x` (currently latest LTS, we keep our servers on LTS):

```bash
nvm install --lts
nvm use --lts
```

4. Upgrade npm:

```bash
npm install npm@latest -g
```

5. Install dependencies with lerna

```bash
$ npm run bootstrap
```

See each package's readme file for further instructions regarding setup.

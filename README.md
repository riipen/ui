# UI

A monorepository containing the Riipen UI kit and its documentation.

## Development

### Node

1. Install `nvm` via the instructions [here](https://github.com/nvm-sh/nvm#installation-and-update), something like:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.37.2/install.sh | bash
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
npm install
npm run bootstrap
```

## Run

Start the documentation server:

```bash
npm start
```

And then visit `http://localhost:3000` in your browser.

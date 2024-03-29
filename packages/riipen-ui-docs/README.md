# Riipen Platform Documentation Service

A documentation site for the Riipen UI kit.

## Setup

These setup instructions should work for macOS and linux. It is assumed you know how to download / install packages in your linux distribution of choice if that is your decision.

### Node

1. Install `nvm` via the instructions [here](https://github.com/nvm-sh/nvm#installation-and-update), something like:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/${VERSION}/install.sh | bash
```

2. Install `node 16` (currently latest LTS, we keep our servers on LTS):

```bash
nvm install
nvm use
```

4. Upgrade npm and install local dependencies:
```bash
npm install npm@latest -g
npm install
```

## Run

Start the server:

```bash
$ npm start
```

## DevOps

### Requirements

1. Install `ansible`

### Deployment

To update the documentation website, simply merge the latest changes into the `docs` branch and push to `origin`.

### Cloud Environments

If you want to create a new cloud environment:

1. Make sure the correct environment file exists in the `config/` directory
2. Run `make config="./config/environment.env" version="environment" cloud` where "environment" is your new environment name
3. Run `git checkout -b environment && git push origin environment`
4. Run `make config="./config/environment.env" version="environment" cloud-run`

For subsequent deploys, you just need to repeat step 3 above.

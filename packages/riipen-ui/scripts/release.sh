#!/bin/bash

BRANCH=$(git branch --show-current)
SEMANTIC_VERSION=$1

if [[ "$BRANCH" != "master" ]]; then
  echo "Must be on branch master to release"
  exit 1;
fi

NPM_VERSION=$(npm version $SEMANTIC_VERSION)

# Commit updated files to git
PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
git add "$(dirname "$0")/../package.json"
git add "$(dirname "$0")/../package-lock.json"
git commit -m "New $SEMANTIC_VERSION: $NPM_VERSION [ci skip]"
git push origin $BRANCH

# Update git tags
git tag "$NPM_VERSION"
git push "$NPM_VERSION"

# Run release script
npm run build
npm publish ./build --tag latest

#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
SEMANTIC_VERSION=$1
DOCS_BRANCH="docs"

if [[ "$BRANCH" != "master" ]]; then
  echo "Must be on branch master to release"
  exit 1;
fi

if [[ $1 -eq 0 ]]; then
  echo "Must pass the new semantic version as the first argument"
  echo "Usage: ./scripts/release.sh 0.4.xx"
  exit 1;
fi

# Update UI docs page first
git checkout $DOCS_BRANCH
git pull origin $DOCS_BRANCH
git merge origin/master
git push origin $DOCS_BRANCH

# Switch back to master branch
git checkout $BRANCH

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

#!/bin/bash

CURR_BRANCH=$(git branch --show-current)
VERSION_CHANGE="prerelease"

verify () {
  echo "Do you wish to release a new $VERSION_CHANGE?"
  read -p "Continue (y/n)?" choice
  case $choice in
    Y|y ) return 0;;
    * ) return 1;;
  esac
}

if [[ "$CURR_BRANCH" == "master" ]]; then
  VERSION_CHANGE="patch"
    if ! verify; then
    echo "Version update cancelled!"
    exit 1;
  fi
elif [[ "$CURR_BRANCH" == "staging" ]]; then
  VERSION_CHANGE="prerelease"
  if ! verify; then
    echo "Version update cancelled!"
    exit 1;
  fi
else
  echo "Current Branch not supported: $CURR_BRANCH"
  exit 0;
fi

# Update version based on branch
NEW_VERSION=$(npm version $VERSION_CHANGE)

# Commit updated files to git
PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
git add "$(dirname "$0")/../package.json"
git add "$(dirname "$0")/../package-lock.json"
git commit -m "Pushed New $VERSION_CHANGE: $NEW_VERSION [ci skip]"
git push origin $CURR_BRANCH

# Update git tags
git tag "$NEW_VERSION"
git push --tags

# Run release script
npm run build
npm publish ./build --tag latest

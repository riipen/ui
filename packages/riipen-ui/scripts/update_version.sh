#!/bin/bash

CURR_BRANCH=$(git branch --show-current)
VERSION_CHANGE="prerelease"
echo $CURR_BRANCH

if [[ "$CURR_BRANCH" == "master" ]]; then
  VERSION_CHANGE="patch"
  echo "Do you wish to release a new $VERSION_CHANGE?"
  read -p "Continue (y/n)?" choice
  case $choice in
    Y|y ) break;;
    * ) exit;;
  esac
  exit 1;
elif [[ "$CURR_BRANCH" == "staging" ]]; then
  VERSION_CHANGE="prerelease"
  echo "Do you wish to release a new $VERSION_CHANGE?"
  read -p "Continue (y/n)?" choice
  case $choice in
    Y|y ) break;;
    * ) exit;;
  esac
else
  echo "Current Branch not supported"
  exit 0;
fi

# Update version based on branch and add tags
NEW_VERSION=$(npm version $VERSION_CHANGE)
git tag "$NEW_VERSION"
git push origin --tags

# Commit updated files to git
PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
git add '../package.json'
git add '../package-lock.json'
git commit -m "Pushed New Version: $VERSION_CHANGE [ci skip]"
git push origin $CURR_BRANCH

# Run release script
npm run release

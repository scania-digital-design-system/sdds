#!/bin/bash

# Prompt the user for the version number
read -p "Enter the version number: " version

# Check if the version is empty
while [[ -z "$version" ]]; do
    read -p "Version cannot be empty. Enter the version number: " version
done

# Prompt the user for the tag (must be "beta" or "latest")
read -p "Enter the tag (beta or latest): " tag

# Check if the tag is valid
if [ "$tag" != "beta" ] && [ "$tag" != "latest" ]; then
  echo "Error: tag must be 'beta' or 'latest'"
  exit 1
fi

# Update the version in package.json
npm version $version

# npm install
npm install

# Build
npm run Build

#publish
npm publish -tag $tag

#!/usr/bin/env bash
# exit on error
set -o errexit
npm install -g typescript
yarn
yarn build
yarn typeorm migration:run -d dist/data-source
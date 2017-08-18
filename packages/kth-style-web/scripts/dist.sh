#!/usr/bin/env bash

# Add this to a Execute Shell in Jenkins
# ./scripts/dist.sh

echo 'Running NPM install and invoking gulp script for SASS processing and dist'
npm install

echo 'Running git commit'

git add ./build
git commit -am 'Committing dist package by Jenkins [ci skip]'

echo 'Push to git'
git push origin HEAD:master

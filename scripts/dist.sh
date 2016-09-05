#!/usr/bin/env bash

#echo 'Running checkout master'
#git checkout master

echo 'Running NPM install and invoking gulp script for SASS processing'

npm install
npm run-script transcompile

echo 'Running git commit'
git add ./dist
git commit -am 'Committing dist package by Jenkins [ci skip]'

echo 'Running push origin master'
#git push origin master
git push

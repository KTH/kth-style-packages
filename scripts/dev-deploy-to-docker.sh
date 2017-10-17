#!/bin/sh
##
## This file is used to deploy do a local Docker container during local development (not Jenkins)
## and it allows you to troubleshoot the deployment process

echo "*** Clear built packages"
[ -d tmp/build ] && rm -r tmp/build
echo "*** Build packages"
docker-compose build && docker-compose up web
ls tmp/build/
echo "*** Copy files to packages/kth-style-web/build"
(cd packages/kth-style-web && ./scripts/prepare-install.sh)
ls -alh packages/kth-style-web/build/
echo "*** Build and launch kth-style-web in Docker"
(cd packages/kth-style-web && docker-compose build && docker-compose up web)
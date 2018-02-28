#!/bin/sh
if [ "$1" == "init" ]; then
  echo "Initialising repos..."
  if [ "$(which lerna)" == "" ]; then
    echo "...lerna not found, installing"
    npm -g install lerna
  else
    echo "...found lerna"
  fi
  echo "...bootstraping project"
  lerna bootstrap --hoist '**/@(isomorphic-schema|component-registry)'
  npm install
elif [ "$1" == "run-all" ]; then
  echo "**************************"
  echo "*** Run all processes: ***"
  echo "**************************"
  scripts/start-doc-dev.sh kth-style & \
  scripts/start-doc-dev.sh kth-style-inferno-bootstrap & \
  scripts/start-doc-dev.sh kth-style-inferno-components & \
  sleep 10 && scripts/start-doc-dev.sh kth-style-web & \
  wait
elif [ "$1" == "kth-style" ]; then
	echo "Starting kth-style build watcher..."
  (cd packages/kth-style && npm run build-dev)

elif [ "$1" == "kth-style-inferno-bootstrap" ]; then
	echo "Starting kth-style-inferno-bootstrap docs build watcher..."
  (cd packages/kth-style-inferno-bootstrap && npm run build-docs-dev)

elif [ "$1" == "kth-style-inferno-components" ]; then
	echo "Starting kth-style-inferno-components docs build watcher..."
  (cd packages/kth-style-inferno-components && npm run build-docs-dev)

elif [ "$1" == "kth-style-web" ]; then
	echo "Starting kth-style-web in development mode"
  (cd packages/kth-style-web && npm run start-dev)

else
  echo "Usage: start-doc-dev.sh [command]"
  echo
  echo "Valid commands:"
  echo
  echo "   init                         -- initialise project for development"
  echo "   run-all                      -- start everything"
  echo "   kth-style                    -- start the gulp watcher to automatically recompile sass-files"
  echo "   kth-style-inferno-bootstrap  -- start the automatic recompile of docs"
  echo "   kth-style-inferno-components -- start the automatic recompile of docs"
  echo "   kth-style-web                -- start the automatic recompile of docs and launch server"
  echo
fi

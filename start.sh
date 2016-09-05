#!/bin/bash
APPLICATION_HOME=/home/places/dist/kth-style/current
LOG_DIR=logs
PROJECT=kth-style


if [ "$1" = "ref" ] ; then
  LOG_DIR=/var/log/$PROJECT
fi

if [ "$1" = "prod" ] ; then
  LOG_DIR=/var/log/$PROJECT
fi

SYSTEM_LOG_FILE=$PROJECT.log
SYSTEM_LOG=$LOG_DIR/$SYSTEM_LOG_FILE
PIDFILE=$LOG_DIR/RUNNING_PID

export NODE_PATH=`pwd`

# Check parameter for type of env
if [ "$1" = "prod" ]; then
  NODE_ENV=prod node app.js
  echo $! > $PIDFILE
elif [ "$1" = "ref" ]; then
  /bin/sh -c 'cd $APPLICATION_HOME; . /home/kth-style/dist/kth-style/VIRTUAL_ENV/bin/activate; exec node app.js'
  echo $! > $PIDFILE
else
  echo 'Running NPM install' 
  npm install
  NODE_ENV=development nodemon app.js
fi

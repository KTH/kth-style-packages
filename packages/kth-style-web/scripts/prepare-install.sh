#!/bin/sh
if [ ! -d ./build ]; then
  mkdir -p ./build;
fi

cp ../../tmp/build/* ./build/
echo "*** Local packages copied to ./build"
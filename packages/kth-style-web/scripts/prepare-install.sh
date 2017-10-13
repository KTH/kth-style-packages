#!/bin/sh
echo "*** Current working directory:"
echo $(pwd)
if [ ! -d ./build ]; then
  echo "*** Creating ./build in kth-style-web"
  mkdir -p ./build;
fi

echo "*** Copy local packages to ./build"
cp ../../tmp/build/* ./build/
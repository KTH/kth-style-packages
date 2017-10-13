#!/bin/sh
echo "*** Current working directory:"
echo $(pwd)
echo "*** Content of kth-style root:"
echo $(ls -alh ../../)
echo "*** **************************"
echo "*** Content of kth-style root/tmp:"
echo $(ls -alh ../../tmp/)
echo "*** **************************"

if [ ! -d ./build ]; then
  echo "*** Creating ./build in kth-style-web"
  mkdir -p ./build;
fi

echo "*** Copy local packages to ./build"
cp ../../tmp/build/* ./build/
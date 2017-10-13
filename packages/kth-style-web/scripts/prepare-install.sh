#!/bin/sh
echo "*** Current working directory:"
echo $(pwd)
echo "*** Content of kth-style root:"
echo $(ls ../../)
echo "*** **************************"
echo "*** Content of kth-style root/tmp:"
echo $(ls ../../tmp/)
echo "*** **************************"
echo "*** Content of kth-style root/tmp/build:"
echo $(ls ../../tmp/build)
echo "*** **************************"

if [ ! -d ./build ]; then
  echo "*** Creating ./build in kth-style-web"
  mkdir -p ./build;
fi

echo "*** Copy local packages to ./build"
cp ../../tmp/build/*.* ./build/
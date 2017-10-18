#!/bin/sh
echo "*** Current working directory:"
echo $(pwd)
echo "*** **************************"
echo "*** Contents of kth-style root/tmp/build:"
echo $(ls ../../tmp/build)
echo "*** **************************"

if [ ! -d ./localPackages ]; then
  echo "*** Creating ./localPackages in kth-style-web"
  mkdir -p ./localPackages;
fi

echo "*** Copy local packages to ./localPackages"
cp ../../tmp/build/*.* ./localPackages/
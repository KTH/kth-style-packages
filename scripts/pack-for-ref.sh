#!/bin/sh
PACKAGES="kth-style
kth-style-inferno-bootstrap
kth-style-inferno-components"

echo "*** Packing local packages and adding to ./build"
if [ ! -d ./build ]; then
  mkdir -p ./build;
fi

cd ./build
for p in $PACKAGES; do
	echo "Processing $p"
  FILE_NAME=$(npm pack ../packages/$p)
done
cd ..

echo "*** /build ***"
ls ./build
echo "*** DONE ***"
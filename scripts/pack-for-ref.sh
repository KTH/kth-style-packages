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
	echo "*** Building and packing $p"
  (cd ../packages/$p && npm install --development)
  (cd ../packages/$p && npm run build)
  FILE_NAME=$(npm pack ../packages/$p)
  rm -r ../packages/$p/node_modules
done
cd ..

echo "*** /build ***"
ls ./tmp/build
echo "*** DONE ***"
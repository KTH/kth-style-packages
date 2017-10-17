#!/bin/sh
PACKAGES="kth-style
kth-style-inferno-bootstrap
kth-style-inferno-components"
# PACKAGES="kth-style-inferno-components"

echo "*** Packing local packages and adding to ./build"
echo $(which npm)
if [ ! -d ./build ]; then
  mkdir -p ./build;
fi

cd ./build
for p in $PACKAGES; do
	echo "*** Building and packing $p"
  cd ../packages/$p
  npm install --development
  # npm run build
  # Go to build folder
  cd ../../build
  FILE_NAME=$(npm pack ../packages/$p)
  rm -r ../packages/$p/node_modules
done
cd ..

echo "*** Contents of [kth-style container]/build ***"
echo "*** These are the locally generated NPM-packages that should be used for deployment of kth-style-web"
echo $(ls ./build)
echo "*** DONE ***"
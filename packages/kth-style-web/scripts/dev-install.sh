#!/bin/bash
if [ ! -d ./build ]; then
  mkdir -p ./build;
fi
cd ./build
KTH_STYLE=$(npm pack ../../kth-style)
KTH_STYLE_INFERNO_BOOTSTRAP=$(npm pack ../../kth-style-inferno-bootstrap)
KTH_STYLE_INFERNO_COMPONENTS=$(npm pack ../../kth-style-inferno-components)
cd ..
echo "*** INSTALLING ***"
rm -r node_modules
npm i ./build/$KTH_STYLE ./build/$KTH_STYLE_INFERNO_BOOTSTRAP ./build/$KTH_STYLE_INFERNO_COMPONENTS
npm i
echo "*** DONE ***"
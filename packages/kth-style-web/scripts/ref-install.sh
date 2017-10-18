#!/bin/sh
echo "*** ************************* ***"
echo "*** INSTALLING LOCAL PACKAGES ***"
echo "*** ************************* ***"
for filename in ./localPackages/*.tgz; do
    echo "*** Installing: $filename"
    npm install $filename
done
echo "*** ***************************** ***"
echo "*** INSTALLING PUBLISHED PACKAGES ***"
echo "*** ***************************** ***"
npm install --development
# npm i ./build/$KTH_STYLE ./build/$KTH_STYLE_INFERNO_BOOTSTRAP ./build/$KTH_STYLE_INFERNO_COMPONENTS
echo "*** ***************************** ***"
echo "***             DONE              ***"
echo "*** ***************************** ***"
#!/bin/sh
echo "*** INSTALLING LOCAL PACKAGES ***"
for filename in ./localPackages/*.tgz; do
    # echo "$filename"
    npm install $filename
done
echo "*** INSTALLING PUBLISHED PACKAGES ***"
npm install --development
# npm i ./build/$KTH_STYLE ./build/$KTH_STYLE_INFERNO_BOOTSTRAP ./build/$KTH_STYLE_INFERNO_COMPONENTS
echo "*** DONE ***"
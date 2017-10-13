#!/bin/sh
echo "*** INSTALLING LOCAL PACKAGES ***"
for filename in ./build/*.tgz; do
    # echo "$filename"
    npm i $filename
done
echo "*** INSTALLING PUBLISHED PACKAGES ***"
npm i --development
# npm i ./build/$KTH_STYLE ./build/$KTH_STYLE_INFERNO_BOOTSTRAP ./build/$KTH_STYLE_INFERNO_COMPONENTS
echo "*** DONE ***"
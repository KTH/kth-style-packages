#!/bin/bash
SCRIPT=`realpath $0`
SCRIPT_PATH=`dirname $SCRIPT`
TARGET="$1"
STANDARD="$2"
TMP_DIR=`mktemp -d 2>/dev/null || mktemp -d -t 'mytmpdir'`
OUTPUT_DIR="$SCRIPT_PATH/reports/"
EXIT_CODE=0

function repeat {
  for i in {1..50}; do 
    echo -n $1
  done
  echo ""
}

repeat "="
echo "Running Pa11y on $TARGET testing against $STANDARD"
repeat "="
echo "Removing old Pa11y reports directory"
rm -rf $OUTPUT_DIR
mkdir $OUTPUT_DIR


echo "Mirroring $TARGET into $TMP_DIR"
wget -P $TMP_DIR \
  --no-directories \
  --mirror \
  --adjust-extension \
  --quiet \
  $TARGET

for FILE in $(find $TMP_DIR -name "*.html");
do
  FILE_NAME=$(basename "$FILE")
  FILE_PATH="file://$FILE"
  REPORT_OUTPUT=${OUTPUT_DIR}report_${FILE_NAME}.html
  SCREENSHOT_OUTPUT=${OUTPUT_DIR}report_${FILE_NAME}_screenshot.png
  
  pa11y --reporter html \
    --ignore "warning;notice" \
    --standard $STANDARD \
    --screen-capture $SCREENSHOT_OUTPUT \
    $FILE_PATH > $REPORT_OUTPUT

  if [ $? -eq 0 ]
  then
    rm $REPORT_OUTPUT
    rm $SCREENSHOT_OUTPUT
  else
    EXIT_CODE=$(($EXIT_CODE+$?))
    echo "Pa11y failed with $FILE_NAME, output can be found at $REPORT_OUTPUT"
  fi
done


echo "Removing temporary dir for pa11y-tested page"
##rm -rf $TMP_DIR

if [ $EXIT_CODE -gt 0 ]
then
  repeat "^"
  echo "Pa11y failed and will exit with code 1 (See above for details)"
  repeat "^"
  exit 1
else
  repeat "="
  echo "Pa11y: all OK"
  repeat "="
  exit 0
fi
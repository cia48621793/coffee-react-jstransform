mkdir -p ./dist
node node_modules/browserify/bin/cmd.js \
  --require "./src/js-syntax-transform" \
  --detect-globals "false" \
  --insert-global-vars "__filename,__dirname" \
  --standalone "coffeeReactJSSyntaxTransform" \
  >> ./dist/js-syntax-transform.js
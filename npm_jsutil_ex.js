/*
npm_jsutil_ex.js

Demonstrate how to use via NPM another github module

Run: node <file.js>

2018-11-13
*/

(async () => {
  const jsutil = require('jsutil')

  const ts = jsutil.timestamp()
  console.log("Wait 5 sec...")
  await jsutil.sleep(5000)
  console.log(jsutil.timestamp() - ts)
})()

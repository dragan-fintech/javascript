// omfg.js
// https://www.npmjs.com/package/stack-trace

const stackTrace = require('stack-trace');
const path = require('path');

module.exports = omfg

function omfg(msg) {
  console.log('------------------------------------');
  console.log(stackTrace.get()[0]);
  console.log('------------------------------------');
  const caller = path.basename(stackTrace.get()[1].getFileName());
  const fname = stackTrace.get()[1].getFunctionName();
  console.log(`[[${caller}:${fname}]] ${msg}`);
}

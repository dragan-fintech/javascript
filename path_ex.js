/*
path_ex.js

Run: node <file.js>

Note: Run this example from the parent of javascript dir to see difference
  between __dirname and cwd
2018-03-12
*/

const path = require('path');
const cwd = require('cwd');

console.log(`__dirname = ${__dirname}`);
console.log(`abs(__dirname) = ${path.resolve(__dirname)}`);
console.log(`cwd = ${cwd()}`);
console.log(`cwd2 = ${path.resolve('.')}`); // no need to install 'cwd' package

const yaml_dir = path.join(path.dirname(__dirname), 'javascript', 'yaml_ex');
console.log(`yaml_dir = ${yaml_dir}`);

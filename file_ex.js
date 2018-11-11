/*
file_ex.js
2018-09-03

Run: node <file.js>
*/

const fs = require('fs')

// Syncronously read a file into a string
const strFileContent = fs.readFileSync('README.md', 'utf8')
console.log(strFileContent)

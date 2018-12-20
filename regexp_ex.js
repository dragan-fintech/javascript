/*
Regular Expressions in JavaScript

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


Run: node <file.js>

2018-12-20
*/

const regex1 = RegExp('foo*');
const regex2 = RegExp('foo*','g');
const str1 = 'table football';

console.log(regex1.test(str1));
// expected output: true

console.log(regex1.test(str1));
// expected output: true

console.log(regex2.test(str1));
// expected output: true

console.log(regex2.test(str1));
// expected output: false
// test() called multiple times on the same global regular expression instance will advance past the previous match

const errorMessagePattern = RegExp('The user .* is not recognized!')
const errorMessage1 = 'The user Pera Zdera is not recognized!'
const errorMessage2 = 'The customer Pera Zdera is not recognized!'

console.log(errorMessagePattern.test(errorMessage1))
// expected output: true

console.log(errorMessagePattern.test(errorMessage2))
// expected output: false

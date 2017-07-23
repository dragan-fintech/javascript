/*
string_ex

Run: node <file.js>

2017-05-02
*/

let mystr = 'today*is*beatiful*day!'

// substring from n to end
console.log(mystr.substr(3))

// first n chars
console.log(mystr.substr(0, 5))

// last n chars
console.log(mystr.substr(mystr.length-5))

// create new string which has last 4 chars same as given
let x = `*****${mystr.substr(mystr.length-4)}`
console.log(x)

// print multiple lines
console.log(
    'Hello\nToday is beaty day!\nYes, it is.')

// split string
const str = 'name=dragan'
const fileds = str.split('=')
console.log('------------------------------------');
console.log(str);
console.log(fileds)
console.log('------------------------------------');
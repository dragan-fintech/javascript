/*
map_ex

Run: node <file.js>

2017-04-10
*/

function foo(a) {
    return (a-2)
}

function map001() {
    const  numbers = [4, 9, 16, 25]

    console.log(numbers.map(Math.sqrt))  // [2, 3, 4, 5]
    console.log(numbers.map(p => Math.sqrt(p)))  // [2, 3, 4, 5]

    //console.log(numbers.map(p-2))  // ERROR!
    console.log(numbers.map(p => p-2))  // [2, 9, 14, 23]
    console.log(numbers.map(foo))  // [2, 9, 14, 23]
}

map001()

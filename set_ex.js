/*
set_ex

Run: node <file.js>

2017-04-21
*/

var _ = require('underscore')

function print_set(set, message = 'set') {
    console.log(`*** ${message} ***`)
    set.forEach((value) => {
        console.log(value)
    })
}

// create new set
var cars = new Set(["Saab", "Volvo", "BMW"])
print_set(cars)

// check if two arrays are same
var arr1 = [1,2,3,1]
var arr2 = [3,2,1]
var set1 = new Set(arr1)
var set2 = new Set(arr2)

console.log(`${_.isEqual(arr1, arr2)}`)
console.log(`${_.isEqual(set1, set2)}`)

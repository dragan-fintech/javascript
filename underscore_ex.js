/*
underscore_ex

Run: node <file.js>

2017-04-21
*/

const _ = require('underscore')

function print_collection(collection, message = 'collection') {
    console.log(`*** ${message} ***`)
    collection.forEach((value) => {
        console.log(value)
    })
}

// check if two arrays are same
var arr1 = [1,2,3,1]
print_collection(arr1, "arr1")
var arr2 = [3,2,1]
print_collection(arr2, "arr2")
var set1 = new Set(arr1)
print_collection(set1, "set1")
var set2 = new Set(arr2)
print_collection(set2, "set2")

console.log(`arr1 == arr2? ${_.isEqual(arr1, arr2)}`)  // false
console.log(`set1 == set2? ${_.isEqual(set1, set2)}`)  // true

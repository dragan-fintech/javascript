/*
set_ex

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
var arr3 = [1,3,2]
print_collection(arr3, "arr3")
var set1 = new Set(arr1)
print_collection(set1, "set1")
var set2 = new Set(arr2)
print_collection(set2, "set2")
var set3 = new Set(arr3)
print_collection(set3, "set3")

console.log(`arr1 == arr2? ${_.isEqual(arr1, arr2)}`)  // false
console.log(`set1 == set2? ${_.isEqual(set1, set2)}`)  // true
console.log(`arr2 == arr3? ${_.isEqual(arr2, arr3)}`)  // false
console.log(`set3 == set2? ${_.isEqual(set3, set2)}`)  // true

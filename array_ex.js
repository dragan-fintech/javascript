/*
array_ex

Run: node <file.js>

2017-04-21
*/

function print_array(arr, message = 'array') {
    console.log(`*** ${message} ***`)
    for (var i=0; i<arr.length; i++) {
        console.log(arr[i])
    }
}

// create new array
var cars = ["Saab", "Volvo", "BMW"]
print_array(cars)

// add new element to array at the end
cars.push("Audy")
print_array(cars, "Add 'Audy' at the end")

// add new element to array at the begining
cars.unshift("Ford")
print_array(cars, "Add 'Ford' at the beginning")

// delete 3rd element (ie. element with index 2)
cars.splice(2, 1)
print_array(cars, "Deleted 3rd element")

// check if value is in array
var result = cars.indexOf("Fiat")
console.log(`Index of 'Fiat' is ${result}`)

// sort the array
cars.sort()
print_array(cars, "Sorted")
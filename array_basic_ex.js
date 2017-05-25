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

function print_array_2(arr, message = 'array') {
    console.log(`*** ${message} ***`)
    arr.forEach(function(item) {
        console.log(item)
    })
}

// create new array
var cars = ["Saab", "Volvo", "BMW"]
print_array_2(cars)

// add new element to array at the end
cars.push("Audy")
print_array(cars, "Add 'Audy' at the end")

// add new element to array at the begining
cars.unshift("Ford")
print_array(cars, "Add 'Ford' at the beginning")

// delete 3rd element (ie. element with index 2)
cars.splice(2, 1)
print_array_2(cars, "Deleted 3rd element")

// check if value is in array
var result = cars.indexOf("Fiat")
console.log(`Index of 'Fiat' is ${result}`)

// sort the array
cars.sort()
print_array(cars, "Sorted")

// *****************************
const customerData = [
  {
    name          : 'The Second Customer',
    account       : '5841f79d3d352a36d35c3cb8',
    createdAt     : new Date(),
    updatedAt     : new Date(),
    billingAddress: {
      unitNumber    : '1001',
      buildingNumber: '9000',
      streetName    : 'Heart Break Blvd',
      cityName      : 'Aorta City',
      provinceName  : 'Ventrical Province',
      countryName   : 'Carotid',
      postalCode    : 'X1X1X1',
    },
    cards: [{
      brand : 'visa',
      type  : 'credit',
      number: '************0000',
      token : '__TOKEN__',
    }],
    metaData: { prop: 'value' },
  },

  {
    _id           : '591c98beebd2f86a3258564f',
    name          : 'Acc 1 Customer A',
    account       : '5841f79d3d352a36d35c3cb8',
    createdAt     : new Date(),
    updatedAt     : new Date(),
    mailingAddress: {
      unitNumber    : '1001',
      buildingNumber: '2001',
      streetName    : 'CustA Blvd',
      cityName      : 'CustACity',
      provinceName  : 'Ontario',
      countryName   : 'Canada',
      postalCode    : 'X1X1X1',
    },
    cards: [{
      brand : 'visa',
      type  : 'credit',
      number: '************8291',
      token : '__TOKEN__',
    }],
    metaData: { prop: 'value' },
  },

  {
    _id           : '591cb1c130161e355f3cff7a',
    name          : 'Org 1 Acc 1 Customer A',
    account       : '58dac88515f377733dee1d83',
    createdAt     : new Date(),
    updatedAt     : new Date(),
    cards: [{
      brand : 'visa',
      type  : 'credit',
      number: '************8291',
      token : '__TOKEN__',
    }],
    metaData: { prop: 'value' },
  },
]

function findCustomerByName(customers, name) {
    found = false
    for (var i=0; i<customers.length; i++) {
        if (customers[i].name === name) {
            found = true
            break
        }
    }

    if (found) {
        console.log(`${name} found`)
    } else {
        console.log(`${name} NOT found`)
    }
}

function findCustomersByAccount(customers, account) {
    customersByAccount = []
    for (var i=0; i<customers.length; i++) {
        if (customers[i].account === account) {
            customersByAccount.push(customers[i])
        }
    }

    console.log(`*** customers of account ${account} ***`)
    for (var i=0; i<customersByAccount.length; i++) {
        console.log('------------------------------------')
        console.log(customersByAccount[i])
        console.log('------------------------------------')
    }
}

findCustomerByName(customerData, 'dragan')
findCustomerByName(customerData, 'The Second Customer')
findCustomersByAccount(customerData, '5841f79d3d352a36d35c3cb8')

/*
query_array_of_objets_ex

Run: node <file.js>

2017-05-23
*/
const _ = require('underscore')

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

function query_underscore_ex(customers, account) {
  let result = _.filter(customers, (e) => {
    return e.account === account
  })

  console.log('query_ex result')
  console.log(result)
}

function query_ex(customers, account) {
  let result = customers.filter(e => e.account === account)

  console.log('query_ex result')
  console.log(result)
}

// this is the best solution :)))
function query_any_ex(customers, prop_name, prop_value) {
  let result = customers.filter(e => e[prop_name] === prop_value)

  console.log('query_any_ex result')
  console.log(result)
}

//findCustomerByName(customerData, 'dragan')
//findCustomerByName(customerData, 'The Second Customer')
//findCustomersByAccount(customerData, '5841f79d3d352a36d35c3cb8')
//query_underscore_ex(customerData, '5841f79d3d352a36d35c3cb8')
query_ex(customerData, '5841f79d3d352a36d35c3cb8')
query_any_ex(customerData, 'account', '5841f79d3d352a36d35c3cb8')
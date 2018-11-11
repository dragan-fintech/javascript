/*
is_subset_ex

Run: node <file.js>

2017-07-24
*/


// is-subset can be used for objects only
const isSubset = require('is-subset')  

// obj-subset is more powerful, can be used to check if an object is subset of
// another, but also if an arrays of objects is subset of another
const objSubset = require('obj-subset')  

const obj1 = { 
    _id: '5841fdd73d352a36d35c3cbe',
    _V: 0,
    account: '5841f79d3d352a36d35c3cb8',
    createdAt: '2016-12-02T23:03:51.367Z',
    name: 'Acc1 Merchant 1500926095444',
    netConnect: { 
        username: 'e-xact2004',
        password: 'arch3r04',
        passwordToken: '49892426b4cc8a8fa22622119d1ebbd6fdb4b5939e1ba7fb9ce6850779371b661332963c183a121a' 
    },
    processorMerchantId: '700000200455',
    settings: { currencyType: 'CAD' },
    subscriptionTerminal: '5841fe853d352a36d35c3cc0',
    terminals: [ '5841fe853d352a36d35c3cc0' ],
    updatedAt: '2017-07-24T19:54:55.559Z',
}

const obj2 = {
    netConnect: { 
        username: 'e-xact2004',
        password: 'arch3r04',
        passwordToken: '49892426b4cc8a8fa22622119d1ebbd6fdb4b5939e1ba7fb9ce6850779371b661332963c183a121a' 
    },
    name: 'Acc1 Merchant 1500926095444',
}

const users1 = [
  {
    id: 1,
    name: 'Dragan',
    email: 'dragan@n.com'
  },
  {
    id: 2,
    name: 'Pera',
    email: 'pera@n.com'
  },
  {
    id: 3,
    name: 'Zika',
    email: 'zika@n.com'
  }
]

const users2 = [
  {
    id: 1,
    name: 'Dragan',
    email: 'dragan@n.com'
  },
  {
    id: 3,
    name: 'Zika',
    email: 'zika@n.com'
  }
]

function is_subset_for_objects() {
  console.log('is_subset_for_objects')
  console.log(isSubset(obj1, obj2))  // true
  console.log(isSubset(obj2, obj1))  // false
}

function obj_subset_for_objects() {
  console.log('obj_subset_for_objects')
  console.log(objSubset(obj1, obj2))  // true
  console.log(objSubset(obj2, obj1))  // false
}

function obj_subset_for_arrays() {
  console.log('obj_subset_for_arrays')
  console.log(objSubset(users1, users2))  // true
  console.log(objSubset(users2, users1))  // false
}

is_subset_for_objects()
obj_subset_for_objects()
obj_subset_for_arrays()

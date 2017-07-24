/*
is_subset_ex

Run: node <file.js>

2017-07-24
*/

const isSubset = require('is-subset')

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

console.log(isSubset(obj1, obj2))  // true
console.log(isSubset(obj2, obj1))  // false

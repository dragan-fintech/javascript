/*
transaction_ex

Run: node <file.js>

2017-04-28
*/

const Transaction = require('./transaction')

try {
    t = new Transaction()
} catch (err) {
    console.log(err);
}

try {
    t = new Transaction({type: 'purchase'})
} catch (err) {
    console.log(err);
}

t = new Transaction({type: 'purchase', amount: 230});
t.print()

t = new Transaction({amount: 1230, description: 'big preauth :)', type: 'preauth'});
t.print()
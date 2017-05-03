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

Transaction.print_counter('unsucesfull creation')

try {
    t = new Transaction({type: 'purchase'})
} catch (err) {
    console.log(err);
}

Transaction.print_counter('unsucesfull creation')

t = new Transaction({type: 'purchase', amount: 230});
t.print()

Transaction.print_counter('success 1')

t = new Transaction({amount: 1230, description: 'big preauth :)', type: 'preauth'});
t.print()

Transaction.print_counter('success 2')

try {
    t.print_counter();
} catch(err) {
    const x = `${err}`
    console.log(x.substr(0, 50))
}

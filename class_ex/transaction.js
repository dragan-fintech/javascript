/*
transaction

Run: node <file.js>

2017-04-28
*/

class Transaction {

    constructor({type, amount, description}={}) {
        console.log('*** transaction ***')

        // type is mandatory
        if (type == undefined) {
            throw 'Invalid transaction. Type must be defined!'
        }

        // amount is mandatory too
        if (amount == undefined) {
            throw 'Invalid transaction. Amount must be defined!'
        }

        this.type = type
        this.amount = amount
        this.description = description

        Transaction.counter++
    }

    print() {
        console.log(`type: ${this.type}`)
        console.log(`amount: ${this.amount}`)

        // description is optional, and is only printed if provided
        if (this.description) {
            console.log(`description: ${this.description}`)
        }
    }

    static print_counter(message) {
        console.log(`${message}: There are ${Transaction.counter} Transaction objects!`)
    }
}

Transaction.counter = 0

module.exports = Transaction

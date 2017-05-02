/*
card_data

Run: node <file.js>

2017-04-28
*/

class CardData {

  constructor(number, year, month) {
    this.number = number
    this.expiry = { year, month }
  }

  strCardData() {
    return JSON.stringify(this)
  }

  encryptCard(account, cb) {
    request.get()
  }

}

module.exports = CardData

// javaScript objects behave like hash :)

function simpleHash() {
    console.log('*** simple hash ***')
    const body = {
        name            : 'Account1',
        resetPasswordUrl: 'myaccnr.com/reset',
        verifyUrl       : 'myaccnr.com/verify',
        acceptInviteUrl : 'myaccnr.com/accept',
    }
    console.log(`name = ${body.name}`)

    body.name = 'Account2'
    console.log(`name = ${body.name}`)
}

// hash in hash
function complexHash() {
    console.log('*** complex hash ***')
    const transactionData = {
        amount: 230,
        cardNumber: '4111111111',
        expiry: {year: 2020, month: 12}
    }

    console.log(`expiry year is: ${transactionData.expiry.year}`)
}


simpleHash()
complexHash()
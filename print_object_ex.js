const body = {
    name            : 'Account1',
    resetPasswordUrl: 'myaccnr.com/reset',
    verifyUrl       : 'myaccnr.com/verify',
    acceptInviteUrl : 'myaccnr.com/accept',
}

// not good :(
console.log(`body = ${body}`)  // -> body = [object Object]

// good :)
console.log(`body = ${JSON.stringify(body)}`)  // -> body = [object Object]

// javaScript objects behave like hash :)

const body = {
    name            : 'Account1',
    resetPasswordUrl: 'myaccnr.com/reset',
    verifyUrl       : 'myaccnr.com/verify',
    acceptInviteUrl : 'myaccnr.com/accept',
}
console.log(`name = ${body.name}`)

body.name = 'Account2'
console.log(`name = ${body.name}`)

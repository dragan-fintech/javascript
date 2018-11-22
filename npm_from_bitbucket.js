// use https://bitbucket.org/gamesoftlab/tempemail/src/develop/ module

(async () => {
  const { createTempEmailProvider } = require('tempemail_module')

  te = createTempEmailProvider('temp_mail')
  const newEmail = await te.createEmailAddress()
  console.log('*** newEmail ***', newEmail)
  te.closeBrowser()
})()

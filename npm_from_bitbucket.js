(async () => {
  const { createTempEmailProvider } = require('tempemail')

  te = createTempEmailProvider('temp_mail')
  const newEmail = await te.createEmailAddress()
  console.log('*** newEmail ***', newEmail)
  te.closeBrowser()
})()

/*


https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
https://developers.google.com/web/fundamentals/getting-started/primers/promises

*/

getUserTest(randomInt(20), randomInt(20));
getUserTest(randomInt(20), randomInt(20));
getUserTest(randomInt(20), randomInt(20));

function getUserTest(userId, wait) {
  console.log(`------------ ${Date.now()}: user=${userId} wait=${wait} ------------`);
  try {
    const user = getUser(userId, wait);
    console.log(`------------ ${Date.now()}: ${JSON.stringify(user)} ------------`);
  } catch (e) {
    console.log(`------------ ${Date.now()}: ${e.message} ------------`);
  }
}

function getUser(userId, wait) {
  sleep(wait*100);

  if (userId < 10 || userId > 15) {
    const user = {
      id: userId,
      nickname: 'dnikolic'
    };

    return user;
  } else {
    throw (Error(`No user with id ${userId}!`));
  }
}

function randomInt(n) {
  return Math.floor((Math.random()*n)+1);
}

function sleep(milliseconds) {
  var start = new Date().getTime()

  while ((new Date().getTime() - start) < milliseconds) {
  }
}
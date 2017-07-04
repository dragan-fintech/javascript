/*


https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
https://developers.google.com/web/fundamentals/getting-started/primers/promises

*/

getUser(randomInt(20), randomInt(20), getUserCb);
getUser(randomInt(20), randomInt(20), getUserCb);
getUser(randomInt(20), randomInt(20), getUserCb);

function getUserCb(user) {
  if (user instanceof Error) {
    console.log(`------------ ${Date.now()}: ${user.message} ------------`);
  } else {
    console.log(`------------ ${Date.now()}: ${JSON.stringify(user)} ------------`);
  }
}

function getUser(userId, wait, cb) {
  console.log(`------------ ${Date.now()}: user=${userId} wait=${wait} ------------`);
  setTimeout(() => {
    if (userId < 10 || userId > 15) {
      const user = {
        id: userId,
        nickname: 'dnikolic'
      };

      cb(user);
    } else {
      cb(new Error(`No user with id ${userId}!`));
    }
  }, wait*100);
}

function randomInt(n) {
  return Math.floor((Math.random()*n)+1);
}

/*
https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
https://developers.google.com/web/fundamentals/getting-started/primers/promises

*/
const getUser = (userId) => new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (userId !== 13) {
      const user = {
        id: userId,
        nickname: 'dnikolic'
      };

      resolve(user);
    } else {
      reject(Error(`no user with id ${userId}`));
    }
  }, randomInt(20)*100);
});

async function getUserTest(userId) {
  console.log(`------------ ${Date.now()}: ${userId} ------------`);
  try {
    const user = await getUser(userId);
    console.log(`------------ ${Date.now()}: ${JSON.stringify(user)} ------------`);
  } catch (e) {
    console.log(`------------ ${Date.now()}: ${e.message} ------------`);
  }
}

function randomInt(n) {
  return Math.floor((Math.random()*n)+1);
}

getUserTest(randomInt(20));
getUserTest(randomInt(20));
getUserTest(randomInt(20));

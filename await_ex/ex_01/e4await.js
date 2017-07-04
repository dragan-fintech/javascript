/*


https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
https://developers.google.com/web/fundamentals/getting-started/primers/promises

*/

getUserTest(randomInt(20), randomInt(20));
getUserTest(randomInt(20), randomInt(20));
getUserTest(randomInt(20), randomInt(20));

async function getUserTest(userId, wait) {
  console.log(`------------ ${Date.now()}: user=${userId} wait=${wait} ------------`);
  
  try {
    const user = await getUser(userId, wait);
    console.log(`------------ ${Date.now()}: ${JSON.stringify(user)} ------------`);
  } catch (err) {
    console.log(`------------ ${Date.now()}: ${err.message} ------------`);
  }
}

function getUser(userId, wait) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId < 10 || userId > 15) {
        const user = {
          id: userId,
          nickname: 'dnikolic'
        };

        resolve(user);
      } else {
        reject(new Error(`No user with id ${userId}!`));
      }
    }, wait*100);
  });

  return p;
}

function randomInt(n) {
  return Math.floor((Math.random()*n)+1);
}

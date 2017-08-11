// https://www.sitepoint.com/delay-sleep-pause-wait/

function sleep(milliseconds) {
  var start = new Date().getTime()

  while ((new Date().getTime() - start) < milliseconds) {
  }
}

function sleepPromise(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, milliseconds);
  });
}

async function test() {
  const t1 = new Date().getTime()
  console.log('Start ' + t1)
  sleep(3000)
  const t2 = new Date().getTime()
  console.log('sleep 3 ' + (t2-t1))
  await sleepPromise(2000);
  const t3 = new Date().getTime()
  console.log('sleep 2 ' + (t3-t2))
}

test()

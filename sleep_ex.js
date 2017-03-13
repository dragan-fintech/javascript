// https://www.sitepoint.com/delay-sleep-pause-wait/

function sleep(milliseconds) {
  var start = new Date().getTime()

  while ((new Date().getTime() - start) < milliseconds) {
  }
}

console.log('Hello ' + new Date().getTime())
sleep(10000)
console.log('there ' + new Date().getTime())
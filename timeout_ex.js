/*
Demonstrate how to execute same function until it succeeds or timeout expire
Function requirements:
- Function must return 'undefined' if there is any problem
- Function arguments are passed as single object {param1: value1, ...} 

Use function runWithTimeout.

Run: node <file.js>

2018-11-22
*/
function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * Simulates working funciton
 * @param {*} args 
 */
function foo(args) {
  const basetime = args.basetime
  const wait = args.wait
  const now = Date.now()
  console.log('foo working', now - basetime)
  if (basetime + wait > now) {
    return undefined
  }
    
  return true
}

/**
 * Attempts to execute function 'func' until it succeeds or timeout expires.
 * Retry is made every 'wait' time.
 * 
 * @param {Date} timeout 
 * @param {Date} wait 
 * @param {function} func 
 * @param {object} args
 * @returns {*} same valur that 'func' returns if successfull
 * @throws {Error}  
 */
async function runWithTimeout(timeout, wait, func, args) {
  const basetime = Date.now()
  console.log('r basetime', basetime)
  let now = Date.now()
  while (basetime + timeout > now) {
    const r = func(args)
    if (r) {
      return r
    }

    await sleep(wait)
    now = Date.now()
  }

  throw Error(`Unable to complete ${func.name} in ${timeout} milliseconds!`)
}

/**
 * Test
 */
async function test() {
  let ret 
  try {
    ret = await runWithTimeout(10000, 500, foo, {basetime: Date.now(), wait: 3000})
  } catch(err) {
    console.log('timeout', err)
  }

  console.log('success', ret)

  try {
    ret = await runWithTimeout(5000, 1000, foo, {basetime: Date.now(), wait: 20000})
  } catch(err) {
    console.log('timeout', err)
  }

  console.log('success', ret)
}

test()
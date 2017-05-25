/*
each_ex
2017-05-05

official website: https://caolan.github.io/async/

Run: node <file.js>

$ node async_each_ex.js 
start 10
start 100
start 50
start 30
complete 10
complete 30
complete 50
complete 100
all done
$ _ 
*/
const async = require('async')

timeouts = [10, 100, 50, 30]

async.each(
    timeouts,
    
    (timeout, cb) => {
        console.log(`start ${timeout}`)
        
        setTimeout(
            () => {
                console.log(`complete ${timeout}`)
                cb()
            },

            timeout
        )
    },
    
    (err) => {
        if (err) {
            console.log('there was an error')
        } else {
            console.log('all done')
        }
    } 
)
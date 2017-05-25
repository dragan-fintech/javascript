/*
eachSeries_ex
2017-05-05

official website: https://caolan.github.io/async/

Run: node <file.js>

Output:
$ node eachSeries_ex.js 
start 10
complete 10
start 100
complete 100
start 50
complete 50
start 30
complete 30
all done
$ _

*/
const async = require('async')

timeouts = [10, 100, 50, 30]

async.eachSeries(
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
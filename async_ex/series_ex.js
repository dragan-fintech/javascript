/*
series_ex
2017-06-07

official website: https://caolan.github.io/async/

Run: node <file.js>

Output:
$ node series_ex.js 
start task one Wed May 31 2017 11:44:26 GMT-0700 (PDT)
start task two Wed May 31 2017 11:44:26 GMT-0700 (PDT)
complete task two Wed May 31 2017 11:44:28 GMT-0700 (PDT)
complete task one Wed May 31 2017 11:44:31 GMT-0700 (PDT)
all done - results are:
------------------------------------
[ 'one', 'two' ]
------------------------------------
$ _

*/
const async = require('async')

async.series(
    [
        (cb) => {
            const taskname = 'one'
            const returnValue = taskname
            console.log(`start task ${taskname} ${new Date()}`)
            
            setTimeout(
                () => {
                    console.log(`complete task ${taskname} ${new Date()}`)
                    cb(null, returnValue)
                },

                5000
            )
        },

        (cb) => {
            const taskname = 'two'
            const returnValue = taskname
            console.log(`start task ${taskname} ${new Date()}`)
            
            setTimeout(
                () => {
                    console.log(`complete task ${taskname} ${new Date()}`)
                    cb(null, returnValue)
                },

                2000
            )
        },
    ],
    
    (err, results) => {
        if (err) {
            console.log('there was an error')
            console.log(err)
        } else {
            console.log('all done - results are:')
            console.log('------------------------------------');
            console.log(results);
            console.log('------------------------------------');
        }
    } 
)
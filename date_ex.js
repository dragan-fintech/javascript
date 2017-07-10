/*
date_ex

Run: node <file.js>
*/

function add_30_min_to_current_time() {
    console.log('------------------------------------')
    console.log('add 30 min to current time')
    console.log('------------------------------------')
    const t1 = new Date()
    let t2 = new Date()
    t2.setMinutes(t1.getMinutes()+30)
    console.log(Date(t1))
    console.log(Date(t2))
    console.log(t2.getTime() - t1.getTime())
    console.log(1000*60*30)
}

function subtract_90_days_from_current_time() {
    console.log('------------------------------------')
    console.log('subtract_90_days_from_current_time')
    console.log('------------------------------------')
    const timeToSubtractMiliseconds = 90*24*60*60*1000
    const t1 = new Date()
    let t2 = new Date()
    t2.setTime(t1.getTime()-timeToSubtractMiliseconds)
    console.log(Date(t1))
    console.log(Date(t2))
    console.log(t1.getTime() - t2.getTime())
    console.log(timeToSubtractMiliseconds)
}

function time_diff() {
    console.log('------------------------------------');
    console.log('time diff');
    console.log('------------------------------------');
    let t1 = new Date()
    console.log(`typeof(t1)=${typeof(t1)}`)
    console.log(t1)

    let t2 = new Date()
    t2.setMinutes(t2.getMinutes()+60);
    console.log(`typeof(t2)=${typeof(t2)}`)
    console.log(t2)

    t2 = Date(t2)
    console.log(`typeof(t2)=${typeof(t2)}`)
    console.log(t2)

    t2 = new Date(t2)
    console.log(`typeof(t2)=${typeof(t2)}`)
    console.log(t2)


    console.log(t2.getTime() - t1.getTime())
}

function timeFromNow(timeToSubstractMilliseconds) {
    return new Date(Date.now() - timeToSubstractMilliseconds)
}

function timeFromNowTest(timeToSubstractMilliseconds) {
    console.log('------------------------------------');
    console.log(`time now - ${timeToSubstractMilliseconds}`);
    console.log('------------------------------------');
    let t = timeFromNow(timeToSubstractMilliseconds)
    console.log(`typeof(t)=${typeof(t)}`)
    console.log(t)
}

function printDates() {
    console.log(`Date.now(): ${Date.now()}`);
    let t = new Date()
    console.log(`t = new Date(): ${t}`);
    console.log(`t.getTime(): ${t.getTime()}`);
}


printDates()
// add_30_min_to_current_time()
// subtract_90_days_from_current_time()
// timeFromNowTest(1000*60*60*24*5)  // subtruct 5 days
// timeFromNowTest(1000*60*60*24*90)  // subtruct 90 days

/*
date_ex

Run: node <file.js>
*/

function add_30_min_to_current_time() {
    var d = new Date()
    d.setMinutes(d.getMinutes()+30)
    console.log(Date(d))
}

function time_diff() {
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

add_30_min_to_current_time()
time_diff()
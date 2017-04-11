/*
date_ex

Run: node <file.js>
*/

function print_current_time() {
    var d = new Date()
    d.setMinutes(d.getMinutes()+30)
    console.log(Date(d))
}

print_current_time()

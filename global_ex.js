/*
global_ex

Date: 2018-08-27
Run: node <file.js>

More info: https://javascript.info/global-object
*/

function defineGlobal() {
    global.var1 = 5
    console.log(`define global: ${global.var1}`)
}

function useGlobal() {
    console.log(`use global: ${global.var1}`)
}

defineGlobal()
useGlobal()

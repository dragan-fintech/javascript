/*
global_ex

Date: 2018-08-27
Run: node <file.js>
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

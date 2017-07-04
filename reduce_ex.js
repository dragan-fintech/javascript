/*
reduce_ex

Run: node <file.js>

2017-06-30
*/

function count_values() {
    const names = ['Dragan', 'Mila', 'Ema', 'Mila', 'Mila', 'Ema']

    const countedNames = names.reduce((countedNamesAcc, name, index, namesArr) => {
        if (name in countedNamesAcc) {
            countedNamesAcc[name]++
        } else {
            countedNamesAcc[name] = 1
        }

        console.log(`------${name}: ${index}-------------`);
        console.log(countedNamesAcc);
        console.log('------------------------------------');

        return countedNamesAcc
    }, {}) 
}


count_values()
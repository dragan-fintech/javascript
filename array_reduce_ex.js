/*
reduce_ex

The reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).
The return value of the function is stored in an accumulator (result/total).
Note: reduce() does not execute the function for array elements without values.

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
        console.log(namesArr);
        console.log(countedNamesAcc);
        console.log('------------------------------------');

        return countedNamesAcc
    }, {}) 
}


count_values()
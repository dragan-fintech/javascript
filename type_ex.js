console.log('-------Number type------------------');
const x = new Number(37);
console.log(typeof(x))  // object
console.log(x instanceof Number);  // true
console.log('------------------------------------');

console.log('-------number type------------------');
const y = 37;
console.log(typeof(x))  // number
console.log(x instanceof Number);  // false
console.log('------------------------------------');

objectsArr = [
    {
        name: 'ema',
        age: 19,
    },
    {
        name: 'mila',
        age: 23,
    },
]

numbersArr = [1,, 2, 3]

console.log('-------object type------------------');
console.log(typeof(objectsArr[0]));  // object
console.log(objectsArr[0] instanceof Object);  // true
console.log(objectsArr[0] instanceof Array);  // false
console.log('------------------------------------');

console.log('--------array of objects type------------------');
console.log(typeof(objectsArr));  // object
console.log(objectsArr instanceof Object);  // true
console.log(objectsArr instanceof Array);  // true
console.log('------------------------------------');

console.log('--------array of numbers type------------------');
console.log(typeof(numbersArr));  // object
console.log(typeof(numbersArr[0]));  // number
console.log('------------------------------------');

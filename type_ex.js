function multiple_examples() {
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
    console.log(objectsArr.name);  // undefined
    console.log(objectsArr instanceof Object);  // true
    console.log(objectsArr instanceof Array);  // true
    console.log('------------------------------------');

    console.log('--------array of numbers type------------------');
    console.log(typeof(numbersArr));  // object
    console.log(numbersArr.name);  // undefined
    console.log(typeof(numbersArr[0]));  // number
    console.log('------------------------------------');
}

class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

function class_ex() {
    console.log('-------- class example ------------------');
    const dragan = new Person('dragan', 49)
    console.log(typeof(Person));  // function
    console.log(Person.name);  // Person
    console.log(typeof(dragan));  // object
    console.log(dragan.constructor.name);  // Person
    console.log('------------------------------------');
}

//multiple_examples()
class_ex()
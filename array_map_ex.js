/*
map_ex

Definition and Usage

The map() method creates a new array with the results of calling a function for
  every array element.
The map() method calls the provided function once for each element in an array,
  in order.
Note: map() does not execute the function for array elements without values.
Note: map() does not change the original array.

Run: node <file.js>

2017-04-10
*/

function foo(a) {
    return (a-2)
}

function map001() {
    const  numbers = [4, 9, 16, 25]

    console.log(numbers.map(Math.sqrt))  // [2, 3, 4, 5]
    console.log(numbers.map(p => Math.sqrt(p)))  // [2, 3, 4, 5]
    console.log(numbers.map((p,i) => {
      console.log(p);
      console.log(i);
      return Math.sqrt(p);
    }))  // [2, 3, 4, 5]

    //console.log(numbers.map(p-2))  // ERROR!
    console.log(
        numbers.map(foo)
    )  // [2, 7, 14, 23]

    console.log(
        numbers.map(p => p-2)
    )  // [2, 7, 14, 23]
    
    console.log(
        numbers.map((number) => {
            return number+3;
        })
    )  // [7, 12, 19, 28]
}

function map001_1() {
  const  numbers = [4, 9, 16, 25]

  const roots = numbers.map((v,i) => {
    console.log(`value=${v}, index=${i}`);
    return Math.sqrt(v);
  });  // 4

  console.log(`roots=${roots}`);  // [2, 3, 4, 5]
}

function map002() {
    const history = [
      {squares: [0,0,0,0]},
      {squares: [1,0,0,0]},
      {squares: [1,2,0,0]},
    ];

    history.map((board, move) => {
      console.log(board);
      console.log(move);
    });
}

//map001();
map001_1();
//map002();

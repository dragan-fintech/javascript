/* 
Interview Cake problem 17

If we execute this Javascript, what will the browser's console show?

Gotchas:
It's not "outside".

It's not "inside".

The script won't throw an error!

Hoisting: 
In Javascript, variable declarations are "hoisted" to the top of the current 
scope. Variable assignments, however, are not.

The declaration (but not the assignment) of text gets hoisted to the top of 
logIt(). So our code gets interpreted as though it were:

var text = 'outside';
function logIt(){
    var text;
    console.log(text);
    text = 'inside';
};
logIt();

Answer: 
Console will show 'undefined'
*/
var text = 'outside';

function logIt() {
    console.log(text);
    var text = 'inside';
};

logIt();
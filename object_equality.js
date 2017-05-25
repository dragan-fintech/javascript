/*
object_equality.js

http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

Run: node <file.js>

2017-05-25
*/

const _ = require('underscore')

const jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

const bobaFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

// Outputs: false
console.log(`bobaFett === jangoFett? ${bobaFett === jangoFett}`);

// Outputs: false
console.log(`bobaFett == jangoFett? ${bobaFett == jangoFett}`);

// Outputs: true
console.log(`jangoFett isEqual bobaFett? ${_.isEqual(jangoFett, bobaFett)}`)

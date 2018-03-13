/*
object_access_key.js

Run: node <file.js>

2018-03-12
*/

const jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

// dot
console.log(`jangoFett.occupation = ${jangoFett.occupation}`);

// by name
console.log(`jangoFett['occupation'] = ${jangoFett['occupation']}`);

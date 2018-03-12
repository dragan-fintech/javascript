/*
lodash_ex

Run: node <file.js>

2018-03-12
*/

const _ = require('lodash')

// https://stackoverflow.com/questions/23186187/merge-two-javascript-objects-if-key-is-equal-with-either-lodash-vanilla-js-or
function objects_deep_merge() {
    const city = "Beograd";
    
    const gdp = {
        "city": city,
        "gdp": [],  
    };
    
    const income = {
        "city": city,
        "income": [],  
    };
    
    const uRate = {
        "city": city,
        "uRate": [],  
    };

    const finalData = _.merge(gdp, income, uRate);

    console.log(finalData);
}

objects_deep_merge()
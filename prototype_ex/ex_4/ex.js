const Warrior = require('./warrior');
const Healer = require('./healer');

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1); // Warrior ...
console.log(hero2); // Healer ...

console.log(hero1.greet());
console.log(hero1.attack());
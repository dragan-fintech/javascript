// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function() {
  return `${this.name} says hello.`;
}

const hero1 = new Hero('Bjorn', 1);

console.log(hero1);  // Hero {name: "Bjorn", level: 1}
console.log(Object.getPrototypeOf(hero1));  // Hero
console.log(hero1.greet());  // Bjorn says hello

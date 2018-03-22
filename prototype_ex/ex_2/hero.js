// Initialize a constructor function for a new Hero =====
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function() {
  return `${this.name} says hello.`;
}

// Initialize Warrior constructor =====
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

// Initialize Healer constructor =====
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

//==============================
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1); // Warrior ...
console.log(hero2); // Healer ...

hero1.greet();  // Uncaught TypeError: hero1.greet is not a function

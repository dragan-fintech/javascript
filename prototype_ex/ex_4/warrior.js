const Hero = require('./hero');

// Initialize Warrior constructor =====
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Inherit all Hero functions
Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

module.exports = Warrior;

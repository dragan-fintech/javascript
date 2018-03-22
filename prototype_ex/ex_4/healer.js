const Hero = require('./hero');

// Initialize Healer constructor =====
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Inherit all Hero functions
Healer.prototype = Object.create(Hero.prototype);

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

module.exports = Healer;

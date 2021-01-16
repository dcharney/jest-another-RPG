const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}

module.exports = Enemy;
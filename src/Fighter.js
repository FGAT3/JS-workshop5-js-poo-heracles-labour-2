const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null; // initialiser à null dans le constructor directement et ici = weapon
    this.shield = null; // initialiser à null dans le constructor directement et ici = shield
  }

  getDamage() {
    return this.strength + (this.weapon ? this.weapon.damage : 0); // vérifier également instance of
  }

  getDefense() {
    return this.dexterity + (this.shield ? this.shield.defense : 0); // vérifier également instance of
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.getDamage()); // l'attaque ne doit plus être randomisée

    const damages = Math.max(attackPoints - this.getDefense(), 0); // remplacer attackPoints par getDefense()

    defender.life = Math.max(defender.life - damages, 0);
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;

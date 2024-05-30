class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage || 10; // Cette méthode peut donner des résultats inattendus avec 0 ou des chaînes vides, car elles sont aussi des valeurs falsy en JavaScript.
  }
}

module.exports = Weapon;

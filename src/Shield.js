class Shield {
  constructor(name, defense) {
    this.name = name;
    this.defense = defense || 10; // Cette méthode peut donner des résultats inattendus avec 0 ou des chaînes vides, car elles sont aussi des valeurs falsy en JavaScript.
  }
}

module.exports = Shield;

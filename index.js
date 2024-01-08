class Hero {
    constructor(nomeHero, idadeHero, tipoHero) {
      this.nomeHero = nomeHero;
      this.idadeHero = idadeHero;
      this.tipoHero = tipoHero;
    }
  
    atacar() {
      if (this.tipoHero === "Mago") {
        console.log(`${this.tipoHero} ${this.nomeHero} me atacou usando magia`);
      } else if (this.tipoHero === "Ninja") {
        console.log(`${this.tipoHero} ${this.nomeHero} me atacou usando estrelas ninja`);
      }
    }
  }
  
  let hero1 = new Hero("Yako", "28", "Ninja");
  let hero2 = new Hero("Gandalf", "500", "Mago");
  
  hero1.atacar();  // Deve imprimir "Ninja Yako me atacou usando estrelas ninja"
  hero2.atacar();  // Deve imprimir "Mago Gandalf me atacou usando magia"
  
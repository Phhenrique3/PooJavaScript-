export default class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;
  vida;


  constructor(nome, vida, tipo) {
    this.nome = nome;
    this.vida = vida;
    this.tipo = tipo;
  }

  obeterInsiginia() {
    if (this.level >= 5) {
      return `Implacavel ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }
}

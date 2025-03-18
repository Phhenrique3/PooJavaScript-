export default class Personagem {
  nome;
  vida = 100
  mana = 100
  level;
  tipo;

  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }

  obeterInsignia() {
    if (this.level >= 5) {
      return `Implacavel ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }
}

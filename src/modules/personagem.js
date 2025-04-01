export default class Personagem {
  nome;
  vida = 100
  mana = 100
  level;
  tipo;
  descricao;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;
  }

  obeterInsignia() {
    if (this.level >= 5) {
      return `Implacavel ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }
}

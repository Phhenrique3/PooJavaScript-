export default class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;
  vida;

  obeterInsiginia() {
    if (this.level >= 5) {
      return `Implacavel ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }
}

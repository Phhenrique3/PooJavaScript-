import Personagem from "./personagem.js";

export class Arqueiro extends Personagem {
  destreza;
  tipo = "Arqueiro";

  constructor(nome, level, destreza) {
    super(nome, level);
    this.destreza = destreza;
  }

  obeterInsignia() {
    if (this.destreza >= 5) {
      return ` Dominador de flechas`;
    }
    return super.obeterInsignia();
  }
}

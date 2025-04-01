import { Arqueiro } from "./arqueiro.js";
import Personagem from "./personagem.js";
import { Mago} from "./mago.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  tipo = "ArqueiroMago";

  constructor(
    nome,
    level,
    destreza,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, level);
    this.ladoArqueiro = new Arqueiro(nome, level, destreza);
    this.ladoMago = new Mago(
      nome,
      level,
      elementoMagico,
      levelMagico,
      inteligencia
    );
  }

  obeterInsignia() {
    return `${this.ladoArqueiro.obeterInsignia()} e ${this.ladoMago.obeterInsignia()}`;
  }
}

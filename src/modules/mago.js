import  Personagem  from "./personagem.js";

export class Mago extends Personagem {
  elementoMagico;
  levalMago;
  inteligencia;
  tipo = "Mago";

  coconstructor(nome, level, elementoMagico, levalMago, inteligencia) {
    supe(nome, level);
    this.elementoMagico = elementoMagico;
    this.levalMago = levalMago;
    this.inteligencia = inteligencia;
  }
}

import  Personagem from "./modules/personagem.js";

// const personagemJose = {
//   nome: "Jose",
//   vida: 7,
//   mana: 6,
//   level: 3,
//   tipo: "Arqueiro",
// };

// const personagemDuda = {
//   nome: "Duda",
//   vida: 7,
//   mana: 6,
//   level: 3,
//   tipo: "Arqueiro",
// };

const personagemPedrinho = new Personagem();
personagemPedrinho.nome = "Pedrinho";
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.level = 5;
personagemPedrinho.tipo = "Mago";

const personagemJose  = new Personagem();
personagemJose.nome = "Jose";
personagemJose.vida = 10;
personagemJose.mana = 3;
personagemJose.level = 3;
personagemJose.tipo = "Arqueiro";

console.log(personagemPedrinho)

console.log('Insiginia de ' + personagemPedrinho.nome + ':' + personagemPedrinho.obeterInsiginia())
console.log('Insiginia de ' + personagemJose.nome + ':' + personagemJose.obeterInsiginia())
import { Personagem } from "./personagem.js";


export class Guerreiro extends Personagem {
     static tipo = "Guerreiro";
     static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    forca;;


    constructor(nome, forca, ) {
        super(nome);
        this.forca = forca;
    }
    obterInsignia(){
        if(this.level >= 7 && this.level >= 5){
            return `guerreiro furioso`
        }
        return super.obterInsignia();
    }
}
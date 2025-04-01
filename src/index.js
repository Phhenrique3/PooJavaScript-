import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";



const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const magajulia = new Mago("Julia", 8, "gelo", 7, 10);
const arqueiroMagoChigo = new Arqueiro("Chico", 7, 10, "ar", 4, 8);

const personagens = [magajulia, magoAntonio, arqueiroMagoChigo];

new PersonagemView(personagens).render();

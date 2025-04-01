import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";


const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const magajulia = new Mago("Julia", 8, "gelo", 7, 10);
const arqueiroAntonio = new Arqueiro("Antonio", 4, 5);
const arqueiroMagoChigo = new ArqueiroMago("Chico", 7, 10, "ar", 4, 8);

const personagens = [magajulia, magoAntonio, arqueiroAntonio, arqueiroMagoChigo];

new PersonagemView(personagens).render();
X
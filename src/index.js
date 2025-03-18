import Personagem from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const magoAntonio = new Mago("Antonio", 100, "fogo", 4, 3);
const magajulia = new Mago("Julia", 100, "gelo", 4, 10);


const personagens = [magajulia, magoAntonio];

new PersonagemView(personagens).render();

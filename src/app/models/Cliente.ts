import { produto } from "./produto";
import { Usuario } from "./Usuario";

export interface Cliente extends Usuario {

    favoritos: produto[],
    carrinho: produto[],
    tipo: 'cliente',
}
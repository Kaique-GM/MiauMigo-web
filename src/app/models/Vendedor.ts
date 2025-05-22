import { produto } from "./produto";
import { Usuario } from "./Usuario";

export interface Vendedor extends Usuario {
    cnpj: string,
    tipo: 'vendedor',
    produtos: produto[],
    loja: string,
}
import { Usuario } from "./Usuario";

export interface Vendedor extends Usuario {
    cnpj: String,
    ativo: Boolean
}
import { produto } from "./produto";

export interface Usuario {
    id: number,
    username: string,
    email: string,
    senha: string,
    favoritos: produto[],
    carrinho: produto[],
    Image: string;
}
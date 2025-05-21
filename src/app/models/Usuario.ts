import { produto } from "./produto";

export interface Usuario {
    id: number,
    username: string,
    email: string,
    senha: string,
    Image: string;
    tipo: string;
}
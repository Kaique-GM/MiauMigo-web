export interface Usuario {
    id: number | null,
    email: String,
    senha: String,
    confirmacaoSenha:String,
    ativo: Boolean
}
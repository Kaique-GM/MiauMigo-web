export interface Vendedor {
    id: number | null,
    email: String,
    senha: String,
    confirmacaoSenha:String,
    cnpj: String,
    ativo: Boolean
}
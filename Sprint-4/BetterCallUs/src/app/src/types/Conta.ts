export default class Conta{
    public nome: string;
    private cpf: string;
    public senha: string;
    public privilegio: string;
    public email:string

    constructor(nome: string, cpf: string, senha: string, privilegio: string, email:string) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.privilegio = privilegio;
        this.email = email;
    }
}

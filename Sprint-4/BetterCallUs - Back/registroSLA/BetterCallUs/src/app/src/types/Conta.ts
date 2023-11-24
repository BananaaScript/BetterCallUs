export default class Conta{
    public nome: string;
    public cpf: string;
    public senha: string;
    public privilegio: number;
    public email:string

    constructor(nome: string, cpf: string, senha: string, privilegio: number, email:string) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.privilegio = privilegio;
        this.email = email;
    }
}

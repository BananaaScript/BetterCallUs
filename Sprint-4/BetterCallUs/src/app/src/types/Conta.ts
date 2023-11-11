export default class Conta{
    nome: string;
    cpf: string;
    senha: string;
    privilegio: string;

    constructor(nome: string, cpf: string, senha: string, privilegio: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.privilegio = privilegio;
    }
}

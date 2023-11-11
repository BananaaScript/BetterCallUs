import Conta from "./Conta";

export default class Cliente extends Conta{
    nivelPrioridade: number;
    email: string;
    telefone: string;
    nomeSocial: string;

    constructor(nome: string, cpf: string, senha: string, privilegio: string, nivelPrioridade: number, email: string, telefone: string, nomeSocial: string) {
        super(nome, cpf, senha, privilegio);
        this.nivelPrioridade = nivelPrioridade;
        this.email = email;
        this.telefone = telefone;
        this.nomeSocial = nomeSocial;
    }
}
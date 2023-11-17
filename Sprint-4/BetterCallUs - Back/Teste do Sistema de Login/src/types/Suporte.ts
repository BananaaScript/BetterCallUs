import Conta from "./Conta";

class Suporte extends Conta {
    constructor(nome: string, cpf: string, senha: string, privilegio: string, email:string) {
        super(nome, cpf, senha, privilegio, email);
    }
}
import Conta from "./Conta";

export class Suporte extends Conta {
    chamados?:number
    constructor(nome: string, cpf: string, senha: string, privilegio: number, email:string, chamados:number) {
        super(nome, cpf, senha, privilegio, email);
        this.chamados = chamados
    }
}
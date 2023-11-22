import Conta from "./Conta";

export class Suporte extends Conta {
    chamados?:number
    chamadosRespondidos?: number
    constructor(nome: string, cpf: string, senha: string, privilegio: number, email:string, chamados:number, chamadosRespondidos:number) {
        super(nome, cpf, senha, privilegio, email);
        this.chamados = chamados
        this.chamadosRespondidos = chamadosRespondidos
    }
}
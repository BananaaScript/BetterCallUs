import Conta from "./Conta";

export default class ADM extends Conta{
    departamento: string;

    constructor(nome: string, cpf: string, senha: string, privilegio: string, departamento: string) {
        super(nome, cpf, senha, privilegio);
        this.departamento = departamento;
    }
}
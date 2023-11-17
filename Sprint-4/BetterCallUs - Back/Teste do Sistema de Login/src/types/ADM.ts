import Conta from "./Conta";

export default class ADM extends Conta{
    public departamento: string;

    constructor(nome: string, cpf: string, senha: string, privilegio: string,email: string, departamento: string) {
        super(nome, cpf, senha, privilegio, email)
        this.departamento = departamento;
    }
}
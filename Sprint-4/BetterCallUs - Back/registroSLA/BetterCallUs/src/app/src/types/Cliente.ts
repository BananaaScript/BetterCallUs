import Conta from "./Conta";

export default class Cliente extends Conta{
    public telefone: string;
    public nomeSocial: string;

    constructor(nome: string, cpf: string, senha: string, privilegio: number, email: string, telefone: string, nomeSocial: string) {
        super(nome, cpf, senha, privilegio, email);
        this.telefone = telefone;
        this.nomeSocial = nomeSocial;
    }
}
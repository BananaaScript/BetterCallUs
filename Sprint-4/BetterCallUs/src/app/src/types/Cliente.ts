import Conta from "./Conta";

export default class Cliente extends Conta{
    public email: string;
    public telefone: string;
    public nomeSocial: string;

    constructor(nome: string, cpf: string, senha: string, privilegio: string, email: string, telefone: string, nomeSocial: string) {
        super(nome, cpf, senha, privilegio, email);
        this.email = email;
        this.telefone = telefone;
        this.nomeSocial = nomeSocial;
    }
}
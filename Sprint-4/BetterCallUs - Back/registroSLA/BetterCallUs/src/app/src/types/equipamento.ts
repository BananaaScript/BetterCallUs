export default class equipamento{
    public numeroSerie: string;
    public nome: string;
    public descricao: string;

    constructor(numeroSerie:string, nome:string, descricao:string){
        this.numeroSerie = numeroSerie;
        this.nome = nome;
        this.descricao = descricao;
    }
}
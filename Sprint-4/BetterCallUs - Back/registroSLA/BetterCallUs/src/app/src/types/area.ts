export default class area2{
    public area1: string;
    public prioridade: string;
    public descricao: string;
    public tempoDeResposta: number;

    constructor(area1: string, prioridade: string, descricao: string, tempoDeResposta: number){
        this.area1 = area1;
        this.prioridade = prioridade;
        this.descricao = descricao;
        this.tempoDeResposta = tempoDeResposta;
    }
}
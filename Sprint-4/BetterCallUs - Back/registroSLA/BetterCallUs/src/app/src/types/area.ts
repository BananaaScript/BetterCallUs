export default class area2 {
    public id: number;
    public area1: string;
    public prioridade: string;
    public descricao: string;
    public tempoDeResposta: number;

    constructor(id: number = 0, area1: string, prioridade: string, descricao: string, tempoDeResposta: number) {
        this.id = id;
        this.area1 = area1;
        this.prioridade = prioridade;
        this.descricao = descricao;
        this.tempoDeResposta = tempoDeResposta;
    }
}
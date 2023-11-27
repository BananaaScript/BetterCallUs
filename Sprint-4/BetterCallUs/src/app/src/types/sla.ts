export class SLA{
    id?:any
    area: string
    prioridade: string;
    TempoResposta:string;
    TempoResolucao:string;
    constructor(area: string, prioridade: string, TempoResposta:string, TempoResolucao:string){
        this.area = area
        this.prioridade = prioridade
        this.TempoResposta = TempoResposta
        this.TempoResolucao = TempoResolucao
    }
}
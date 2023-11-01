import { DadosTicket, Prioridade, AreaProblema, calcularSLA } from './sla';

export const tickets: DadosTicket[] = [];

export const adicionarTicket = (novoTicket: DadosTicket) => {
  const tempoDeRespostaCalculado = calcularSLA(novoTicket);
  novoTicket.tempoDeResposta = tempoDeRespostaCalculado;
  tickets.push(novoTicket);
};

export const novoTicket: DadosTicket = {
  prioridade: Prioridade.MEDIA,
  areaProblema: AreaProblema.REDE,
  tempoDeResposta: '',
};

adicionarTicket(novoTicket);

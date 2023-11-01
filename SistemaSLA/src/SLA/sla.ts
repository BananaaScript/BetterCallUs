export enum Prioridade {
  ALTA = 'Alta',
  MEDIA = 'Média',
  BAIXA = 'Baixa',
}

export enum AreaProblema {
  REDE = 'Problema de Conexão',
  SOFTWARE = 'Falha de Software',
  SEGURANCA = 'Problema de Segurança',
  MALWARE = 'Vírus e Malware',
  HARDWARE = 'Falha de Hardware',
  CODIGO = 'Dúvidas de Programação',
  IMPRESSAO = 'Problemas de Impressão',
  OUTRO = 'Outro',
}

export interface DadosTicket {
  tempoDeResposta: string;
  prioridade: Prioridade;
  areaProblema: AreaProblema;
}

export const calcularSLA = (dadosTicket: DadosTicket): string => {

  const tempoRespostaMap: { [key: number]: string } = {
    1: '1 hora',
    2: '2 horas',
    3: '3 horas',
  };

  let tempoDeResposta = tempoRespostaMap[dadosTicket.tempoDeResposta as unknown as number];

  switch (dadosTicket.prioridade) {
    case Prioridade.BAIXA:
      tempoDeResposta = tempoRespostaMap[1];
      break;
    case Prioridade.MEDIA:
      tempoDeResposta = tempoRespostaMap[2];
      break;
    case Prioridade.ALTA:
      tempoDeResposta = tempoRespostaMap[3];
      break;
    default:
      break;
  }

  return `${tempoDeResposta}`;
};


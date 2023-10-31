import React, { useEffect, useState } from 'react';
import { formatDate } from '../../util/dataUtil';

interface FormDoTicketProps {
  id?: number | string;
  sumario: string;
  prioridade: string;
  status: string;
  dataDeCriacao?: Date;
  dataDeAtualizacao?: Date;
  soLeitura?: boolean;
  noEnvio: (
    id: number | string,
    sumario: string,
    prioridade: string,
    status: string,
    dataDeCriacao: Date,
    dataDeAtualizacao: Date
  ) => void;
}

function FormDoTicket({
  id = '',
  sumario,
  prioridade,
  status,
  dataDeCriacao = new Date(),
  dataDeAtualizacao = new Date(),
  soLeitura = false,
  noEnvio,
}: FormDoTicketProps) {
  const [tSumario, setTSumario] = useState(sumario || '');
  const [tPrioridade, setTPrioridade] = useState(prioridade || 'Baixa');
  const [tStatus, setTStatus] = useState(status || 'Criado');

  useEffect(() => {
    setTSumario(sumario || '');
    setTPrioridade(prioridade || 'Baixa');
    setTStatus(status || 'Criado');
  }, [id, sumario, prioridade, status]);
  
  return (
    <div className='FormDoTicket'>
      <div className='form'>
        <label htmlFor='id'>ID</label>
        <input type='text' value={id.toString()} name='id' disabled />
        <label htmlFor='sumario'>Sumário</label>
        <input
          name='sumario'
          type='text'
          value={tSumario}
          onChange={(e) => setTSumario(e.target.value)}
          disabled={soLeitura}
        ></input>

        <select
          name='prioridade'
          value={tPrioridade}
          onChange={(e) => setTPrioridade(e.target.value)}
          disabled={soLeitura}
        >
          <option>Baixa</option>
          <option>Média</option>
          <option>Alta</option>
          <option>Urgente</option>
        </select>

        <select
          name='status'
          value={tStatus}
          onChange={(e) => setTStatus(e.target.value)}
          disabled={soLeitura}
        >
          <option>Criado</option>
          <option>Em aguardo</option>
          <option>Em andamento</option>
          <option>Finalizado</option>
        </select>

        <label htmlFor='dataDeCriacao'>Data de criação</label>
        <input
          type='date'
          value={formatDate(dataDeCriacao)}
          disabled
        />

        <label htmlFor='dataDeAtualizacao'>Data de atualização</label>
        <input
          type='date'
          value={formatDate(dataDeAtualizacao)}
          disabled
        ></input>

        <button
          onClick={() => {
            noEnvio(id, tSumario, tPrioridade, tStatus, dataDeCriacao, dataDeAtualizacao);
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default FormDoTicket;

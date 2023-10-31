import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {
  criarTicket,
  deletarTicket,
  pegarTodosOsTickets,
  atualizarTicket,
} from './service/ticketService';
import FormDoTicket from './componentes/formDoTicket/formDoTicket';
import { formatDate } from './util/dataUtil';

interface Ticket {
  id: number | string;
  sumario: string;
  prioridade: string;
  status: string;
  dataDeCriacao: Date | string;
  dataDeAtualizacao: Date | string;
}

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [currentTicket, setCurrentTicket] = useState<Ticket>({
    id: 0,
    sumario: '',
    prioridade: '',
    status: '',
    dataDeCriacao: '',
    dataDeAtualizacao: '',
  });

  const conseguirTodosOsTickets = async () => {
    const ticketData = await pegarTodosOsTickets();
    setTickets(ticketData);
  };

  const enviarRequisicaoDeSalvamento = async (
    id: number | string,
    sumario: string,
    prioridade: string,
    status: string,
    dataDeCriacao: Date | string,
    dataDeAtualizacao: Date | string
  ) => {
    const novoTicket: Ticket = {
      id,
      sumario,
      prioridade,
      status,
      dataDeCriacao: dataDeCriacao instanceof Date ? formatDate(dataDeCriacao) : dataDeCriacao,
      dataDeAtualizacao: dataDeAtualizacao instanceof Date ? formatDate(dataDeAtualizacao) : dataDeAtualizacao,
    };

    const ticketSalvo = typeof id === 'number'
      ? await atualizarTicket(Number(id), novoTicket)
      : await criarTicket(novoTicket);

    if (!ticketSalvo) {
      return;
    }

    conseguirTodosOsTickets();
    setCurrentTicket(ticketSalvo);
  };

  const enviarRequisicaoDeApagamento = async (ticket: Ticket) => {
    if (typeof ticket.id === 'number') {
      const resultado = await deletarTicket(ticket.id);

      if (!resultado) {
        return;
      }
    }
    
    conseguirTodosOsTickets();
    setCurrentTicket({
      id: 0,
      sumario: '',
      prioridade: '',
      status: '',
      dataDeCriacao: '',
      dataDeAtualizacao: '',
    });
  };

  useEffect(() => {
    conseguirTodosOsTickets();
  }, []);

  return (
    <div className="App">
      <div className="formPrincipal">
        <h2>Tickets</h2>
        <FormDoTicket
          id={currentTicket.id}
          sumario={currentTicket.sumario}
          prioridade={currentTicket.prioridade}
          status={currentTicket.status}
          dataDeCriacao={
            typeof currentTicket.dataDeCriacao === 'string'
              ? new Date(currentTicket.dataDeCriacao)
              : currentTicket.dataDeCriacao
          }
          dataDeAtualizacao={
            typeof currentTicket.dataDeAtualizacao === 'string'
              ? new Date(currentTicket.dataDeAtualizacao)
              : currentTicket.dataDeAtualizacao
          }
          soLeitura={false}
          noEnvio={enviarRequisicaoDeSalvamento}
        />
      </div>
      <h1>Tickets</h1>
      {tickets.map((ticket, index) => (
        <div
          key={index}
          onClick={() => setCurrentTicket(ticket)}
          style={{ border: '1px solid black' }}
        >
          <p>id: {ticket.id}</p>
          <p>sumario: {ticket.sumario}</p>
          <p>prioridade: {ticket.prioridade}</p>
          <p>status: {ticket.status}</p>
          <p>data de criação: {ticket.dataDeCriacao.toString()}</p>
          <p>data de atualização: {ticket.dataDeAtualizacao.toString()}</p>
        </div>
      ))}
    </div>
  );
}
export default App;

import React, { useState } from 'react';
import './App.css';
import { tickets, adicionarTicket, novoTicket } from './SLA/valoresgenericos';
import { DadosTicket, Prioridade, calcularSLA } from './SLA/sla';

function App() {
  const [MostrarTickets, setMostrarTickets] = useState<DadosTicket[]>(tickets);

  const addNovoTicket = () => {
    adicionarTicket(novoTicket);
    setMostrarTickets([...tickets]);
  };

  const updatePrioridade = (index: number, novaPrioridade: Prioridade) => {
    const updatedTickets = MostrarTickets.map((ticket, idx) => {
      if (idx === index) {
        const updatedTicket = { ...ticket, prioridade: novaPrioridade };
        const updatedSLA = calcularSLA(updatedTicket);
        return { ...updatedTicket, tempoDeResposta: updatedSLA };
      }
      return ticket;
    });
    setMostrarTickets(updatedTickets);
  };

  const excluirTicket = (index: number) => {
    const atualizarTickets = MostrarTickets.filter((_, idx) => idx !== index);
    setMostrarTickets(atualizarTickets);
  
    const atualizarStaticTickets = tickets.filter((_, idx) => idx !== index);
    tickets.splice(index, 1);
  
    setMostrarTickets(atualizarStaticTickets);
  };
  

  return (
    <div className="app-container">
      <h1>Exemplo de SLA :)</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tempo De Resposta</th>
              <th>Prioridade</th>
              <th>Área do Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {MostrarTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.tempoDeResposta}</td>
                <td>
                  <select
                    value={ticket.prioridade}
                    onChange={(e) => updatePrioridade(index, e.target.value as Prioridade)}
                  >
                    <option value={Prioridade.ALTA}>Alta</option>
                    <option value={Prioridade.MEDIA}>Média</option>
                    <option value={Prioridade.BAIXA}>Baixa</option>
                  </select>
                </td>
                <td>{ticket.areaProblema}</td>
                <td>
                  <button onClick={() => excluirTicket(index)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <button onClick={addNovoTicket}>Adicionar Novo Ticket</button>
    </div>
  );
}

export default App;

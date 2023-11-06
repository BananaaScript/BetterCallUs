import React from 'react';
import Login from '../../../pages/login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'
import '../../../pages/Ticket/index'
import { useEffect, useState } from 'react';
import { formatDate } from '../../../util/dataUtil';
import {
    criarTicket,
    deletarTicket,
    pegarTodosOsTickets,
    atualizarTicket,
  } from '../../../service/ticketService';
import FormDoTicket from '../../../componentes/formDoTicket/formDoTicket';
import axios from 'axios';

interface Ticket {
  id: number | string;
  sumario: string;
  prioridade: string;
  status: string;
  dataDeCriacao: Date | string;
  dataDeAtualizacao: Date | string;
}

export const Chamadassup = () => {
  // Chame Login() aqui se necessário

// ==============Sistema de Ticket==========================
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

// ====================================================

// ==================Sistema SLA=======================

const [chamados, setChamados] = useState<Array<{ id: number; prioridade: string; area: string; tempoderesposta: number}>>([]);
const [prioridade, setPrioridade] = useState('');
const [area, setArea] = useState('');

useEffect(() => {
  axios.get('http://localhost:3002/chamados')
    .then((response) => {
      setChamados(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

const handleCreate = () => {
  axios.post('http://localhost:3002/chamados', { prioridade, area })
    .then(() => {
      setPrioridade('');
      setArea('');
      updateChamados();
    })
    .catch((error) => {
      console.error(error);
    });
};


const handleDelete = (id: number) => {
  axios.delete(`http://localhost:3002/chamados/${id}`)
    .then(() => {
      updateChamados();
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateChamados = () => {
  axios.get('http://localhost:3002/chamados')
    .then((response) => {
      setChamados(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//===============================================

  return (
    <div className='bodyTicket' >
      <div className='colunaTicket'>
      {tickets.map((ticket, index) => (
        <div className="sidenav" key={index} style={{ border: '1px solid black' }}>
          <p className='linha'>
          <p>sumario: {ticket.sumario}</p>
          <p>prioridade: {ticket.prioridade}</p>
          <p>status: {ticket.status}</p>
          </p>
        </div>
      ))}
      </div>
      <div className="main">
          {/* Header específico para a página Chamadassup */}
          <div className='headAPP'>
            <div className='buttonAPP'>
              <Link to='/ticket'><button>Enviar ticket</button></Link>
            </div>
            <div className='logoApp'>
              <Link to='/'><img id='logo' alt='logo' src='logo.png' /></Link>
            </div>
            <div className='menuAPP'>
              <button>
                MENU
              </button>
            </div>
            <Link to='/Chamadassup'><button>suporte</button></Link>
            <Link to='/ticket'><button>admin</button></Link>
            {/* Inclua outros elementos do cabeçalho conforme necessário */}
          </div>
        <div>
          <h1 className='SLAName'>SLA</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tempo de Resposta</th>
                  <th>Prioridade</th>
                  <th>Área</th>
                  <th>Ações</th>
                </tr>
              </thead>
            <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>Horas: {chamado.tempoderesposta}</td>
              <td>{chamado.prioridade}</td>
              <td>{chamado.area}</td>
              <td>
                <button className='SLAButton' onClick={() => handleDelete(chamado.id)}>Excluir</button>
              </td>
              </tr>
          ))}
          </tbody>
          </table>
          <h2>Adicionar</h2>
          <select
            className='SLASelect'
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
          >
            <option value="">Prioridade</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
      
          <select
            className='SLASelect'
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Área</option>
            <option value="Problema de Conexão">Problema de Conexão</option>
            <option value="Falha de Software">Falha de Software</option>
            <option value="Problema de Segurança">Problema de Segurança</option>
            <option value="Vírus e Malware">Vírus e Malware</option>
            <option value="Falha de Hardware">Falha de Hardware</option>
            <option value="Dúvidas de Programação">Dúvidas de Programação</option>
            <option value="Problemas de Impressão">Problemas de Impressão</option>
            <option value="Outro">Outro</option>
          </select>
          <button className='SLAButton' onClick={handleCreate} disabled={area === "" || prioridade === ""}>Adicionar</button>
        </div>
      </div>

{/*         <div className='notepad'>
            <h1>Meu Bloco de Notas</h1>
            <textarea id="textArea" placeholder="Digite suas notas aqui..."></textarea>
        </div> */}
    </div>
)
}

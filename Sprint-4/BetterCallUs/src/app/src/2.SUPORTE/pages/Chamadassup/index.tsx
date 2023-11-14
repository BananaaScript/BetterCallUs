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
  Login()

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



//===============================================

  return (
      <p>pokas</p>

)
}

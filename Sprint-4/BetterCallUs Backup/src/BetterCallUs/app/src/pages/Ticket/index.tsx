
import  Login from '../login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'
import { link } from 'fs';
import React, { useEffect, useState } from 'react';
import { formatDate } from '../../util/dataUtil';
import {
    criarTicket,
    deletarTicket,
    pegarTodosOsTickets,
    atualizarTicket,
  } from '../../service/ticketService';
import FormDoTicket from '../../componentes/formDoTicket/formDoTicket';

interface Ticket {
    id: number | string;
    sumario: string;
    prioridade: string;
    status: string;
    dataDeCriacao: Date | string;
    dataDeAtualizacao: Date | string;
}

function TicketFunction(){

    Login()

      /* SISTEMA DE TICKET */
  /* ------------------------------------------------------------------------------------------- */
  
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [currentTicket, setCurrentTicket] = useState<Ticket>({
    id: '',
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
      dataDeCriacao: Date/*  | string */,
      dataDeAtualizacao: Date/*  | string */
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
        id: '',
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

  /* ------------------------------------------------------------------------------------------- */


    return (
        <div className='bodyTicket'>
            <div className='problemaTicket'>
                <h1>Enviar uma solicitação</h1>
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
                >
                </FormDoTicket>

            </div>
            <br />

        </div>
    )

}

export default TicketFunction
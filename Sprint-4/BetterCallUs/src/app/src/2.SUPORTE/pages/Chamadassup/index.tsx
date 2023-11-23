import React from 'react';
import Login from '../../../pages/login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'
import '../../../pages/Ticket/index'
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment-timezone'

export const Chamadassup = () => {
  Login()

  const [chamados, setChamados] = useState<Array<{ id: number; area: string; titulo: string; sumario: string; tempoderesposta: number; datacriacao: string; dataatualizacao: string, id_cliente: number, nome_equipamento: string;}>>([]);
  const [area, setArea] = useState('');
  const [titulo, setTitulo] = useState('');
  const [sumario, setSumario] = useState('');
  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);
  const [equipamentos, setEquipamentos] = useState<Array<string>>([]);
  const [selectedEquipamento, setSelectedEquipamento] = useState('');

  let idCliente = 2;

  // quando o sistema de login estiver pronto, tem que mudar para = idcliente que fizer login


  const formatarData = (data: string) => {
    return moment(data).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateChamados();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/chamados')
      .then((response) => {
        setChamados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/equipamentos')
      .then((response) => {
        setEquipamentos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (id: number) => {
    const ticketToEdit = chamados.find((chamado) => chamado.id === id);
    if (ticketToEdit) {
      setEditingTicketId(id);
      setArea(ticketToEdit.area);
      setTitulo(ticketToEdit.titulo);
      setSumario(ticketToEdit.sumario);
    }
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3001/chamados/${id}`)
      .then(() => {
        updateChamados(); 
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const updateChamados = () => {
    axios.get('http://localhost:3001/chamados')
      .then((response) => {
        setChamados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
    <h1>Tickets</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Sumario</th>
          <th>Tempo de Resposta</th>
          <th>Data de Criação</th>
          <th>Área</th>
          <th>Equipamento</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {chamados.map((chamado) => (
          <tr key={chamado.id}>
            <td>{chamado.id}</td>
            <td>{chamado.titulo}</td>
            <td>{chamado.sumario}</td>
            <td>Horas: {chamado.tempoderesposta}</td>
            <td>{formatarData(chamado.datacriacao)}</td>
            <td>{chamado.area}</td>
            <td>{chamado.nome_equipamento}</td>
            <td>
              <button onClick={() => handleEdit(chamado.id)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

)
}

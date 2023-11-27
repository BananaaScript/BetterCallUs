import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment-timezone'
import Login from "../../login"
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import './style/hist.css'

export const Histuser = () => {
    const auth = useContext(AuthContext)
    const [chamados, setChamados] = useState<Array<{ id: number; area: string; titulo: string; sumario: string; tempoderesposta: number; datacriacao: string; dataatualizacao: string, email_cliente: number, nome_equipamento: string, resposta: string, status: string, nome_suporte: number}>>([]);
  const [area, setArea] = useState('');
  const [status, setStatus] = useState('');
  const [titulo, setTitulo] = useState('');
  const [sumario, setSumario] = useState('');
  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);
  const [equipamentos, setEquipamentos] = useState<Array<string>>([]);
  const [selectedEquipamento, setSelectedEquipamento] = useState('');

  let emailCliente = auth.usuario?.email;

  const formatarData = (data: string) => {
    return moment(data).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
  };

  const [expandedSumarioId, setExpandedSumarioId] = useState<number | null>(null);

  const handleExpansaoSumario = (id: number) => {
    setExpandedSumarioId(expandedSumarioId === id ? null : id);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateChamados();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/chamadosdocliente?emailCliente=${emailCliente}`)
      .then((response) => {
        setChamados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [emailCliente]);
  

  useEffect(() => {
    axios.get('http://localhost:3001/equipamentos')
      .then((response) => {
        setEquipamentos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreate = () => {

    if (editingTicketId === null){
      axios.post('http://localhost:3001/chamados', { area, titulo, sumario, status, email_cliente: emailCliente, nome_equipamento: selectedEquipamento})
        .then(() => {
          setArea('');
          setTitulo('');
          setSumario('');
          setStatus('');
          setEditingTicketId(null);
          updateChamados();
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else{
      axios
      .put(`http://localhost:3001/chamadosdocliente/${editingTicketId}`, {
        area,
        titulo,
        sumario,
        status,
        email_cliente: emailCliente,
      }).then(() => {
        setArea('');
        setTitulo('');
        setSumario('');
        setStatus('');
        setEditingTicketId(null);
        updateChamados();
      })
      .catch((error) => {
        console.error(error);
      });

    }
  };

  const handleEdit = (id: number) => {
    const ticketToEdit = chamados.find((chamado) => chamado.id === id);
    if (ticketToEdit) {
      setEditingTicketId(id);
      setArea(ticketToEdit.area);
      setTitulo(ticketToEdit.titulo);
      setSumario(ticketToEdit.sumario);
      setStatus(ticketToEdit.status);
    }
  };

  const HandleReenviar = (id: number) => {
    const chamado = chamados.find((chamado) => chamado.id === id);
  
    if (chamado) {
      axios
        .put(`http://localhost:3001/chamados/${id}`, {
          area: chamado.area,
          titulo: chamado.titulo,
          sumario: chamado.sumario,
          status: 'Em aguardo',  
          email_cliente: emailCliente,
        })
        .then(() => {
          setEditingTicketId(null);
          updateChamados();
        })
        .catch((error) => {
          console.error(error);
        });
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
    axios.get(`http://localhost:3001/chamadosdocliente?emailCliente=${emailCliente}`)
      .then((response) => {
        setChamados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

return (
  <div className={`Tabela`}>
    <h1>Histórico</h1>
    <table width={200} border={1} cellPadding={2}>

      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Sumário</th>
          <th>Suporte</th>
          <th>Tempo de Resposta</th>
          <th>Data de Criação</th>
          <th>Data de Atualização</th>
          <th>Área</th>
          <th>Status</th>
          <th>Equipamento</th>
          <th>Resposta</th>
          <th>Reenviar</th>
        </tr>

        </thead>


        <tbody>

  {chamados.map((chamado) => (
    <tr key={chamado.id}>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.id}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {expandedSumarioId === chamado.id ? chamado.titulo : `${chamado.titulo.slice(0, 50)}...`}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {expandedSumarioId === chamado.id ? chamado.sumario : `${chamado.sumario.slice(0, 50)}...`}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.nome_suporte}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        Horas: {chamado.tempoderesposta}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {formatarData(chamado.datacriacao)}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {formatarData(chamado.dataatualizacao)}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.area}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.status}
      </td>

      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.nome_equipamento}
      </td>
      
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.resposta}
      </td>

      <td>
        <button onClick={() => HandleReenviar(chamado.id)} disabled={chamado.status !== 'Finalizado'}>
          Reenviar
        </button>
      </td>

      

    </tr>
  ))}
      </tbody>


    </table>
  </div>
  );
};

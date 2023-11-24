import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone'
import Login from "../../login"
import Voltar from "../editaruser/index"
import './style/hist.css'

export const Histuser = () => {
    Login()
    const [chamados, setChamados] = useState<Array<{ id: number; area: string; titulo: string; sumario: string; tempoderesposta: number; datacriacao: string; dataatualizacao: string, id_cliente: number, nome_equipamento: string, status: string;}>>([]);
  const [area, setArea] = useState('');
  const [status, setStatus] = useState('');
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

  const handleCreate = () => {

    if (editingTicketId === null){
      axios.post('http://localhost:3001/chamados', { area, titulo, sumario, status, id_cliente: idCliente, nome_equipamento: selectedEquipamento})
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
      .put(`http://localhost:3001/chamados/${editingTicketId}`, {
        area,
        titulo,
        sumario,
        status,
        id_cliente: idCliente,
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
          id_cliente: idCliente,
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
            <th>Data de Atualização</th>
            <th>Área</th>
            <th>Status</th>
            <th>Equipamento</th>
            <th>Reenviar</th>
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
              <td>{formatarData(chamado.dataatualizacao)}</td>
              <td>{chamado.area}</td>
              <td>{chamado.status}</td>
              <td>{chamado.nome_equipamento}</td>
              <td> 
              <button onClick={() => HandleReenviar(chamado.id)}
                disabled={chamado.status !== "Finalizado"}
                >Reenviar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
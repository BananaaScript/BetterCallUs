import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone'


function App() {
  const [chamados, setChamados] = useState<Array<{ id: number; area: string; prioridade: string; status: string; tempoderesposta: number; datacriacao: string; dataatualizacao: string, id_cliente: number}>>([]);
  const [area, setArea] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [status, setStatus] = useState('');
  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);

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

  const handleCreate = () => {

    if (editingTicketId === null){
      axios.post('http://localhost:3001/chamados', { area, prioridade, status, id_cliente: idCliente})
        .then(() => {
          setArea('');
          setPrioridade('')
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
        prioridade,
        status,
        id_cliente: idCliente,
      }).then(() => {
        setArea('');
        setPrioridade('')
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
      setPrioridade(ticketToEdit.prioridade);
      setStatus(ticketToEdit.status);
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
      <h1>SLA</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Prioridade</th>
            <th>Tempo de Resposta</th>
            <th>Data de Criação</th>
            <th>Data de Atualização</th>
            <th>Área</th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.status}</td>
              <td>{chamado.prioridade}</td>
              <td>Horas: {chamado.tempoderesposta}</td>
              <td>{formatarData(chamado.datacriacao)}</td>
              <td>{formatarData(chamado.dataatualizacao)}</td>
              <td>{chamado.area}</td>
              <td>
                <button onClick={() => handleDelete(chamado.id)}>Excluir</button>
              </td>
              <td>
                <button onClick={() => handleEdit(chamado.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Editar</h2>
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
      >
        <option value="">Prioridade</option>
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Status</option>
        <option value="Em aguardo">Em aguardo</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Finalizado">Finalizado</option>
      </select>
     
      <button onClick={handleCreate} disabled={prioridade === ""}>Adicionar</button>
    </div>
  );
}

export default App;
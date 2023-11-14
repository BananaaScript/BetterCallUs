import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone'

function App() {
  const [chamados, setChamados] = useState<Array<{ id: number; area: string; titulo: string; sumario: string; status: string; tempoderesposta: number; estado: string, datacriacao: string; dataatualizacao: string;}>>([]);
  const [area, setArea] = useState('');
  const [titulo, setTitulo] = useState('');
  const [sumario, setSumario] = useState('');
  const [status, setStatus] = useState('');
  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);

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
    const novoEstado = 'aberto'

    if (editingTicketId === null){
      axios.post('http://localhost:3001/chamados', { area, titulo, sumario, status, estado: novoEstado })
        .then(() => {
          setArea('');
          setTitulo('');
          setSumario('');
          setStatus('');
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
            <th>ID</th>
            <th>Titulo</th>
            <th>Sumario</th>
            <th>Status</th>
            <th>Tempo de Resposta</th>
            <th>Data de Criação</th>
            <th>Data de Atualização</th>
            <th>Área</th>
            <th>Estado</th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>{chamado.titulo}</td>
              <td>{chamado.sumario}</td>
              <td>{chamado.status}</td>
              <td>Horas: {chamado.tempoderesposta}</td>
              <td>{formatarData(chamado.datacriacao)}</td>
              <td>{formatarData(chamado.dataatualizacao)}</td>
              <td>{chamado.area}</td>
              <td>{chamado.estado}</td>
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
      <h2>Adicionar</h2>
      <select
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
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        maxLength={50}
      />
      <textarea
        placeholder="Sumário"
        value={sumario}
        onChange={(e) => setSumario(e.target.value)}
        maxLength={1000}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Status</option>
        <option value="Em aguardo">Em aguardo</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Finalizado">Finalizado</option>
      </select>
      <button onClick={handleCreate} disabled={area === "" || titulo === "" || sumario=== "" || status === ""}>Adicionar</button>
    </div>
  );
}

export default App;
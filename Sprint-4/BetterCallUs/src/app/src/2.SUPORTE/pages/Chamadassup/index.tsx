import React, { useEffect, useState, useContext } from 'react';
import Login from '../../../pages/login';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import axios from 'axios';
import moment from 'moment-timezone';
import '../Chamadassup/styles/Ticket.css';

export const Chamadassup = () => {
  const auth = useContext(AuthContext);
  const [chamados, setChamados] = useState<Array<{
    id: number;
    area: string;
    titulo: string;
    sumario: string;
    tempoderesposta: number;
    datacriacao: string;
    dataatualizacao: string;
    status: string;
    email_cliente: string;
    nome_cliente: string;
    nomeSocial_cliente: string;
    cpf_cliente: string;
    telefone_cliente: string;
    nome_equipamento: string;
    resposta: string;
  }>>([]);
  const [respostaTextArea, setRespostaTextArea] = useState('');
  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);
  const [equipamentos, setEquipamentos] = useState<Array<string>>([]);
  const [selectedEquipamento, setSelectedEquipamento] = useState('');
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [chamadosSemResposta, setChamadosSemResposta] = useState<
    Array<{
      id: number;
      area: string;
      titulo: string;
      sumario: string;
      tempoderesposta: number;
      datacriacao: string;
      dataatualizacao: string;
      status: string;
      email_cliente: string;
      nome_cliente: string;
      nomeSocial_cliente: string;
      cpf_cliente: string;
      telefone_cliente: string;
      nome_equipamento: string;
      resposta: string;
    }>
  >([]);
  const [chamadosDoSuporte, setChamadosDoSuporte] = useState<
    Array<{
      id: number;
      area: string;
      titulo: string;
      sumario: string;
      tempoderesposta: number;
      datacriacao: string;
      dataatualizacao: string;
      status: string;
      email_cliente: string;
      nome_cliente: string;
      nomeSocial_cliente: string;
      cpf_cliente: string;
      telefone_cliente: string;
      nome_equipamento: string;
      resposta: string;
    }>
  >([]);

  let emailSuporte = auth.usuario?.email;

  const formatarData = (data: string) => {
    return moment(data).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
  };
  
   const handleRespostaChange = (chamadoId: number, novaResposta: string) => {
  setRespostas((prevRespostas) => ({
    ...prevRespostas,
    [chamadoId]: novaResposta,
    
  }));
}; 
const [expandedSumarioId, setExpandedSumarioId] = useState<number | null>(null);

  const handleExpansaoSumario = (id: number) => {
    setExpandedSumarioId(expandedSumarioId === id ? null : id);
  };

  const updateChamados = () => {
    axios.get('http://localhost:3001/chamados').then((response) => {
      setChamados(response.data);
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateChamados();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/chamados').then((response) => {
      setChamados(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/chamadossemresposta`)
      .then((response) => {
        setChamadosSemResposta(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/chamadosdosuporte?emailSuporte=${emailSuporte}`)
      .then((response) => {
        setChamadosDoSuporte(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [emailSuporte]);

  const handleEdit = (id: number) => {
    const ticketToEdit = chamados.find((chamado) => chamado.id === id);
    if (ticketToEdit) {
      setEditingTicketId(id);
      setRespostaTextArea(ticketToEdit.resposta || '');
    }
  };

  const handleAceitar = (id: number) => {
    const chamado = chamadosSemResposta.find((chamado) => chamado.id === id);

    if (chamado) {
      axios
        .put(`http://localhost:3001/aceitarchamado/${id}`, {
          status: 'Em andamento',
          email_suporte: emailSuporte,
        })
        .then(() => {
          setEditingTicketId(null);
          updateChamados();
        })
        .catch((error) => {
          console.error(error);
        });
    }
    window.location.reload();
  };

  const handleResponder = (id: number) => {
    const chamado = chamadosDoSuporte.find((chamado) => chamado.id === id);

    if (chamado) {
      axios
        .put(`http://localhost:3001/responderchamado/${id}`, {
          status: 'Finalizado',
          resposta: respostaTextArea,
        })
        .then(() => {
          setEditingTicketId(null);
          setRespostaTextArea('');
          updateChamados();
        })
        .catch((error) => {
          console.error(error);
        });
    }
    window.location.reload();
  };

  return (
    <div className="corpo">
      <div className={`Tabela`}>
      <h1>Tickets abertos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Sumario</th>
            <th>Tempo de Resposta</th>
            <th>Data de Criação</th>
            <th>Área</th>
            <th>Status</th>
            <th>Equipamento</th>
            <th>Nome do cliente</th>
            <th>Cpf do cliente</th>
            <th>Telefone do cliente</th>
            <th>E-mail do cliente</th>
            <th>Aceitar</th>
          </tr>
        </thead>
        <tbody>
  {chamadosSemResposta.map((chamado) => (
    <tr key={chamado.id}>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.id}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.titulo}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {expandedSumarioId === chamado.id ? chamado.sumario : `${chamado.sumario.slice(0, 50)}...`}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        Horas: {chamado.tempoderesposta}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {formatarData(chamado.datacriacao)}
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
        {chamado.nome_cliente}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.cpf_cliente}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.telefone_cliente}
      </td>
      <td onClick={() => handleExpansaoSumario(chamado.id)} className={expandedSumarioId === chamado.id ? 'expandido' : ''}>
        {chamado.email_cliente}
      </td>
      <td>
        <button onClick={() => handleAceitar(chamado.id)} disabled={chamado.status !== 'Em aguardo'}>
          Aceitar
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
      </div>
      <div className={`Tabela`}>
      <h1>Tickets do Suporte</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Sumario</th>
            <th>Tempo de Resposta</th>
            <th>Área</th>
            <th>Status</th>
            <th>Equipamento</th>
            <th>Telefone do cliente</th>
            <th>E-mail do cliente</th>
            <th>Resposta</th>
            <th>Finalizar</th>
          </tr>
        </thead>
        <tbody>
          {chamadosDoSuporte.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>{chamado.titulo}</td>
              <td>{chamado.sumario}</td>
              <td>Horas: {chamado.tempoderesposta}</td>
              <td>{chamado.area}</td>
              <td>{chamado.status}</td>
              <td>{chamado.nome_equipamento}</td>
              <td>{chamado.telefone_cliente}</td>
              <td>{chamado.email_cliente}</td>
              <td>
                <div>
                  <label htmlFor="respostaTextArea">Resposta:</label>
                  <textarea 
                    id="respostaTextArea"
                    value={respostaTextArea}
                    onChange={(e) => setRespostaTextArea(e.target.value)}
                    disabled={chamado.status !== 'Em andamento'}
                  />
                </div>
              </td>
              <td>
                <button onClick={() => handleResponder(chamado.id)} disabled={chamado.status !== 'Em andamento'}>
                  Finalizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};




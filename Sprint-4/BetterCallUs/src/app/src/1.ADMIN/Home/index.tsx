import Login from "../../App"
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Home/styles/adm.css'
import { link } from "fs";
import moment from "moment-timezone";

export const Adm = () => {
    Login()

    const [chamados, setChamados] = useState<Array<{ id: number; area: string; tempoderesposta: string; temporesolucao: string; datacriacao: string; dataatualizacao: string, id_cliente: number}>>([]);
    const [area, setArea] = useState('');
    const [tempoderesposta, setTempoderesposta] = useState('');
    const [temporesolucao, setTemporesolucao] = useState('');
    const [status, setStatus] = useState('');
    const [tipodeproblema, setTipodeproblema] = useState('');
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
        axios.post('http://localhost:3001/chamados', { tempoderesposta, temporesolucao, id_cliente: idCliente})
          .then(() => {
            setArea('');
            setTempoderesposta('')
            setTemporesolucao('')
            setStatus('');
            setTipodeproblema('');
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
          tempoderesposta,
          temporesolucao,
          id_cliente: idCliente,
        }).then(() => {
          setArea('');
          setTempoderesposta('')
          setTemporesolucao('')
          setStatus('');
          setTipodeproblema('');
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
        setTempoderesposta(ticketToEdit.tempoderesposta);
        setTemporesolucao(ticketToEdit.temporesolucao);
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
    }
    
const pagCadastro = () => {
  window.location.href = "/Cadastro";
}


  return(
    <div className="bodyAdm">
      <div className="privAdm">
            <h3>Bem vindo! Selecione uma das opções abaixo: </h3>
            <div className="opcAdm">
              
                <button className="btnAdm" onClick={pagCadastro}>
                    Editar Privilegios
                </button>
              

                <button className="btnAdm">
                    Definir Service Level Agreement (SLA)
                </button>
                <button className="btnAdm">
                    Adicionar tópicos ao FAQ
                </button>
            </div>

      </div>

      <div>
        <h1>SLA</h1>
        <table>
          <thead>
            <tr>
              <th>Tipo de Problema</th>
              <th>Prioridade</th>
              <th>Tempo de Resposta</th>
              <th>Tempo de Resolução</th>
            </tr>
          </thead>
          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id}>
                <td>{chamado.tempoderesposta}</td>
                <td>Horas: {chamado.tempoderesposta}</td>
                <td>{chamado.temporesolucao}</td>
                <td>Horas: {chamado.temporesolucao}</td>
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
          value={tipodeproblema}
          onChange={(e) => setTipodeproblema(e.target.value)}
        >
          <option value="">Tipo de Problema</option>
          <option value="Problemadeconexao">Problema de conexão</option>
          <option value="Falhadesoftware">Falha de Software</option>
          <option value="Problemadeseguranca">Problema de Segurança</option>
          <option value="Virusemalware">Virus e Malware</option>
          <option value="Falhadehardware">Falha de Hardware</option>
          <option value="Duvidasdeprogramacao">Dúvidas de Programação</option>
          <option value="Problemasdeimpressao">Problemas de Impressão</option>
          <option value="Outro">Outro</option>
        </select>   
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Prioridade</option>
          <option value="Baixa">Baixa</option>
          <option value="Media">Média</option>
          <option value="Alta">Alta</option>
          <option value="Urgente">Urgente</option>
        </select>   
        <select
          value={tempoderesposta}
          onChange={(e) => setTempoderesposta(e.target.value)}
        >
          <option value="">Tempo de resposta</option>
          <option value="30min">30min</option>
          <option value="1hr">1 hora</option>
          <option value="2hrs">2 horas</option>
          <option value="3hrs">3 horas</option>
          <option value="4hrs">4 horas</option>
          <option value="6hrs">6 horas</option>
          <option value="8hrs">8 horas</option>
          <option value="12hrs">12 horas</option>
          <option value="1dia">1 dia</option>
          <option value="2dias">2 dias</option>
          <option value="3dias">3 dias</option>
          <option value="5dias">5 dias</option>
          <option value="1semana">1 semana</option>
        </select>
        <select
          value={temporesolucao}
          onChange={(e) => setTemporesolucao(e.target.value)}
        >
          <option value="">Tempo de resolução</option>
          <option value="30min">30min</option>
          <option value="1hr">1 hora</option>
          <option value="2hrs">2 horas</option>
          <option value="3hrs">3 horas</option>
          <option value="4hrs">4 horas</option>
          <option value="6hrs">6 horas</option>
          <option value="8hrs">8 horas</option>
          <option value="12hrs">12 horas</option>
          <option value="1dia">1 dia</option>
          <option value="2dias">2 dias</option>
          <option value="3dias">3 dias</option>
          <option value="5dias">5 dias</option>
          <option value="1semana">1 semana</option>
        </select>
      
        <button onClick={handleCreate} disabled={tempoderesposta === ""}>Adicionar</button>
      </div>
    </div>

  )
}

import  Login from '../login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'
import { link } from 'fs';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import moment from 'moment-timezone'

function TicketFunction(){
    const auth = useContext(AuthContext)
    const [chamados, setChamados] = useState<Array<{ id: number; area: string; titulo: string; sumario: string; tempoderesposta: number; datacriacao: string; dataatualizacao: string, email_cliente: number, nome_equipamento: string;}>>([]);
    const [area, setArea] = useState('');
    const [titulo, setTitulo] = useState('');
    const [sumario, setSumario] = useState('');
    const [editingTicketId, setEditingTicketId] = useState<number | null>(null);
    const [equipamentos, setEquipamentos] = useState<Array<string>>([]);
    const [selectedEquipamento, setSelectedEquipamento] = useState('');
  
    let emailCliente = auth.usuario?.email;
  
    // quando o sistema de login estiver pronto, tem que mudar para = emailCliente que fizer login
  
  
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
        axios.post('http://localhost:3001/chamados', { area, titulo, sumario, email_cliente: emailCliente, nome_equipamento: selectedEquipamento})
          .then(() => {
            setArea('');
            setTitulo('');
            setSumario('');
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
          email_cliente: emailCliente,
        }).then(() => {
          setArea('');
          setTitulo('');
          setSumario('');
          setEditingTicketId(null);
          updateChamados();
        })
        .catch((error) => {
          console.error(error);
        });
  
      }
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
      <div className='divzona'>
        <h3>Enviar Solicitação</h3>

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
          <div className="doiss">
          <select
            value={selectedEquipamento || ''}
            onChange={(e) => setSelectedEquipamento(e.target.value)}
          >
            <option value="">Equipamento</option>
            {equipamentos.map((equipamento) => (
              <option key={equipamento} value={equipamento}>
                {equipamento}
              </option>
            ))}
          </select> 

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
          </div>

          <button className="buttonTicket" onClick={handleCreate} disabled={area === "" || titulo === "" || sumario=== "" || selectedEquipamento === null}>Enviar</button>
    </div>
    )
}

export default TicketFunction
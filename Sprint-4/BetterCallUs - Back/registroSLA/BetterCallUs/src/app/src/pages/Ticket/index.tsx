
import  Login from '../login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'
import { link } from 'fs';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import moment from 'moment-timezone'
import { AuthContext } from '../../contexts/Auth/AuthContext';

function TicketFunction(){

    Login()

    const auth = useContext(AuthContext)
    const [chamados, setChamados] = useState<Array<{ id: number; nome_area: string; titulo: string; sumario: string; tempoderesposta: number; datacriacao: string; dataatualizacao: string, id_cliente: number, nome_equipamento: string;}>>([]);
    const [areas, setAreas] = useState<Array<string>>([]);
    const [selectedArea, setSelectedArea] = useState('');
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
  
    useEffect(() => {
      axios.get('http://localhost:3001/areas')
        .then((response) => {
          setAreas(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const handleCreate = () => {
  
      if (editingTicketId === null){
        axios.post('http://localhost:3001/chamados', { nome_area: selectedArea, titulo, sumario, id_cliente: idCliente, nome_equipamento: selectedEquipamento})
          .then(() => {
            /* setArea(''); */
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
          /* area, */
          titulo,
          sumario,
          id_cliente: idCliente,
        }).then(() => {
          /* setArea(''); */
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
      <div>
        <h2>Adicionar</h2>
        <select
            value={selectedArea || ''}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="">Área</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
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
          <button onClick={handleCreate} disabled={selectedArea === null || titulo === "" || sumario=== "" || selectedEquipamento === null}>Adicionar</button>
    </div>
    )
}

export default TicketFunction
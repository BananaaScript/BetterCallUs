import Login from "../../App"
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Home/styles/adm.css'
import { link } from "fs";
import moment from "moment-timezone";
import { SLAsistema } from "../sla/sla";

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
const redirectSLA = () =>{
  window.location.href = "/sla"
}

  return(
    <div className="bodyAdm">
      <div className="privAdm">
            <h3>Bem vindo! Selecione uma das opções abaixo: </h3>
            <div className="opcAdm">
              
                <button className="btnAdm" onClick={pagCadastro}>
                    Editar Privilegios
                </button>
              

                <button className="btnAdm" onClick={redirectSLA}>
                    Definir Service Level Agreement (SLA)
                </button>
                <button className="btnAdm">
                    Adicionar tópicos ao FAQ
                </button>
            </div>

      </div>
    </div>

  )
}
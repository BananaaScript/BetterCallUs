import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Home/styles/adm.css'
import { SLA } from "../../types/sla";

export const SLAsistema = () => {

    const [sla, setSla] = useState<Array<SLA>>([]);
    const [area, setArea] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [TempoResposta, setTempoResposta] = useState('');
    const [TempoResolucao, setTempoResolucao] = useState('');
    const [editando, setEditando] = useState(false);
    const [editId, setEditId] = useState('');
  
    useEffect(() => {
      axios.get('http://localhost:3001/sla')
        .then((response) => {
          setSla(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const handleCreate = () => {
        if(area === 'Problema de conexão'){
            let prioridade = '10'
            let TempoResposta = '2 hrs'
            let TempoResolucao = '4 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Falha de software'){
            let prioridade = '08'
            let TempoResposta = '30 min'
            let TempoResolucao = '2 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Problema de segurança'){
            let prioridade = '09'
            let TempoResposta = '4 hrs'
            let TempoResolucao = '8 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Vírus e Malware'){
            let prioridade = '06'
            let TempoResposta = '1 hrs'
            let TempoResolucao = '3 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Falha de Hardware'){
            let prioridade = '07'
            let TempoResposta = '6 hrs'
            let TempoResolucao = '12 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Dúvidas de Programação'){
            let prioridade = '02'
            let TempoResposta = '3 hrs'
            let TempoResolucao = '6 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Problemas de impressão'){
            let prioridade = '03'
            let TempoResposta = '2 hrs'
            let TempoResolucao = '4 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
        else if(area === 'Outro'){
            let prioridade = '05'
            let TempoResposta = '2 hrs'
            let TempoResolucao = '4 hrs'
            let nSla = new SLA(area, prioridade, TempoResposta, TempoResolucao)
            sla.push(nSla)
            axios.post('http://localhost:3001/sla', {area, prioridade, TempoResposta, TempoResolucao, })
             .then(() =>{
                setArea('');
                setPrioridade('');
                setTempoResposta('');
                setTempoResolucao('');
                window.location.reload();
             })
             .catch((error)=>{
                console.log('ERRO')
                console.error(error)
             })
        }
  
    };

    const handleUpdate = () =>{
            axios.put(`http://localhost:3001/sla/${editId}`, {area, prioridade, TempoResposta, TempoResolucao})
             .then(()=>{
                setEditando(false)
                setEditId('');
                window.location.reload();
             })
             .catch((error) =>{
                console.error(error)
             })
        
    }

    const Editar = (id:any, area:string, prioridade:string, TempoResposta:string, TempoResolucao:string) =>{
        setEditId(id)
        setArea(area);
        setPrioridade(prioridade);
        setTempoResposta(TempoResposta);
        setTempoResolucao(TempoResolucao);

        
        setEditando(true)
    }
  return(
      <div>
        <h1>SLA</h1>
        <table>
          <thead>
            <tr>
              <th>Tipo de Problema</th>
              <th>Prioridade</th>
              <th>Tempo de Resposta</th>
              <th>Tempo de Resolução</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {sla.map((sla) => (
              <tr>
                <td>{sla.area}</td>
                <td>{sla.prioridade}</td>
                <td>{sla.TempoResposta}</td>
                <td>{sla.TempoResolucao}</td>
                {!editando &&(<td><button onClick={() => Editar(sla.id, sla.area, sla.prioridade, sla.TempoResposta, sla.TempoResolucao)}>Editar</button></td>)}
              </tr>
            ))}
          </tbody>
        </table>
        {editando?(
            <>
                <h2>Editar</h2>
                <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                >
                <option value="">Tipo de Problema</option>
                <option value="Problema de conexão">Problema de conexão</option>
                <option value="Falha de software">Falha de Software</option>
                <option value="Problema de segurança">Problema de Segurança</option>
                <option value="Vírus e Malware">Virus e Malware</option>
                <option value="Falha de Hardware">Falha de Hardware</option>
                <option value="Dúvidas de Programação">Dúvidas de Programação</option>
                <option value="Problemas de impressão">Problemas de Impressão</option>
                <option value="Outro">Outro</option>
                </select>
                <select
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
                >
                <option value="">Prioridade</option>
                <option value="10">10</option>
                <option value="09">09</option>
                <option value="08">08</option>
                <option value="07">07</option>
                <option value="06">06</option>
                <option value="05">05</option>
                <option value="04">04</option>
                <option value="03">03</option>
                <option value="02">02</option>
                <option value="01">01</option>      
                </select>   
                <select
                value={TempoResposta}
                onChange={(e) => setTempoResposta(e.target.value)}
                >
                <option value="">Tempo de resposta</option>
                <option value="30 min">30min</option>
                <option value="1 hrs">1 hora</option>
                <option value="2 hrs">2 horas</option>
                <option value="3 hrs">3 horas</option>
                <option value="4 hrs">4 horas</option>
                <option value="6 hrs">6 horas</option>
                <option value="8 hrs">8 horas</option>
                <option value="12 hrs">12 horas</option>
                <option value="1 dia">1 dia</option>
                <option value="2 dias">2 dias</option>
                <option value="3 dias">3 dias</option>
                <option value="5 dias">5 dias</option>
                <option value="1 semana">1 semana</option>
                </select>
                <select
                value={TempoResolucao}
                onChange={(e) => setTempoResolucao(e.target.value)}
                >
                <option value="">Tempo de resolução</option>
                <option value="30 min">30min</option>
                <option value="1 hr">1 hora</option>
                <option value="2 hrs">2 horas</option>
                <option value="3 hrs">3 horas</option>
                <option value="4 hrs">4 horas</option>
                <option value="6 hrs">6 horas</option>
                <option value="8 hrs">8 horas</option>
                <option value="12 hrs">12 horas</option>
                <option value="1 dia">1 dia</option>
                <option value="2 dias">2 dias</option>
                <option value="3 dias">3 dias</option>
                <option value="5 dias">5 dias</option>
                <option value="1 semana">1 semana</option>
                </select>
                <button onClick={handleUpdate}>Atualizar</button>
            </>
        ):
        (
            <>
                <h2>Enviar</h2>
                <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                >
                <option value="">Tipo de Problema</option>
                <option value="Problema de conexão">Problema de conexão</option>
                <option value="Falha de software">Falha de Software</option>
                <option value="Problema de segurança">Problema de Segurança</option>
                <option value="Vírus e Malware">Virus e Malware</option>
                <option value="Falha de Hardware">Falha de Hardware</option>
                <option value="Dúvidas de Programação">Dúvidas de Programação</option>
                <option value="Problemas de impressão">Problemas de Impressão</option>
                <option value="Outro">Outro</option>
                </select>
            </>
        )}   
        
        <button onClick={handleCreate}>Enviar</button>
      </div>

  )
}
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style/sla.css'

export const SLAsistema = () => {
   const [chamado, setChamado] = useState<Array<{id:number; titulo:string; area:string; prioridade:string; tempoderesposta:string; TempoResolucao:string}>>([]);
   const [area, setArea] = useState('');
   const [prioridade, setPrioridade] = useState('');
   const [tempoderesposta, setTempoResposta] = useState('');
   const [TempoResolucao, setTempoResolucao] = useState('');
   const [editando, setEditando] = useState(false);
   const [editId, setEditId] = useState('');
 
   useEffect(() => {
     axios.get('http://localhost:3001/chamados/abertos')
       .then((response) => {
         setChamado(response.data);
       })
       .catch((error) => {
         console.error(error);
       });
   }, []);
 

   const handleUpdate = () =>{
          if(area && prioridade && tempoderesposta && TempoResolucao){
            axios.put(`http://localhost:3001/sla/${editId}`, {area, prioridade, tempoderesposta, TempoResolucao})
              .then(()=>{
                setEditando(false)
                setEditId('');
                window.location.reload();
              })
              .catch((error) =>{
                console.error(error)
              })
          }  
   }

   const Editar = (id:any, area:string, prioridade:string, tempoderesposta:string, TempoResolucao:string) =>{
       setEditId(id)
       setArea(area);
       setPrioridade(prioridade);
       setTempoResposta(tempoderesposta);
       setTempoResolucao(TempoResolucao);

       
       setEditando(true)
   }
  return(
     <div className='Body'>
       <h1>Chamados abertos</h1>
       <table>
         <thead>
           <tr>
             <th>ID</th>
             <th>Título</th>
             <th>Tipo de Problema</th>
             <th>Prioridade</th>
             <th>Tempo de Resposta</th>
             <th>Tempo de Resolução</th>
             <th>Editar</th>
           </tr>
         </thead>
         <tbody>
           {chamado.map((chamado) => (
             <tr key={chamado.id}>
               <td>{chamado.id}</td>
               <td>{chamado.titulo}</td>
               <td>{chamado.area}</td>
               <td>{chamado.prioridade}</td>
               <td>{chamado.tempoderesposta}</td>
               <td>{chamado.TempoResolucao}</td>
               {!editando &&(<td><button onClick={() => Editar(chamado.id, chamado.area, chamado.prioridade, chamado.tempoderesposta, chamado.TempoResolucao)}>Editar</button></td>)}
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
               value={tempoderesposta}
               onChange={(e) => setTempoResposta(e.target.value)}
               >
               <option value="">Tempo de resposta</option>
               <option value="30 minutos">30min</option>
               <option value="1 hora">1 hora</option>
               <option value="2 horas">2 horas</option>
               <option value="3 horas">3 horas</option>
               <option value="4 horas">4 horas</option>
               <option value="6 horas">6 horas</option>
               <option value="8 horas">8 horas</option>
               <option value="12 horas">12 horas</option>
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
            
           </>
       )}   
     </div>
 )
}

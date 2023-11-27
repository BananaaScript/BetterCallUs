import axios from "axios";
import { useState, useEffect } from "react";
import topico from "../../types/FAQ";

import "../Lista/styles/editfaq.css"

export const EditFaq = () => {
    const [topicos, setTopicos] = useState<Array<topico>>([])
    const [titulo, setTitulo] = useState('');
    const [id, setId] = useState('');  
    const [descricao, setDescricao] = useState('');
    const [campoError, setCampoError] = useState('');
    const [tituloError, setTituloError] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:3001/registroFaq')
            .then((response) =>{
                setTopicos(response.data)
            })
            .catch((error) =>{
                console.log(error)
            })
    }, []) 

    const RegistrarTopico = () => {
        if (titulo !== '' && descricao !== '' && id !== '') {
          const idExistente = topicos.some((topico) => topico.id === id);
          console.log('ID Existente?', idExistente);
          if (idExistente) {
            setCampoError('ID já existe. Escolha um ID único.');

          } else {
            if (titulo === '' || descricao === '' || id === '') {
                setCampoError('Preencha todos os campos');
          }
             else {
            let CadTopico = new topico(titulo, descricao, id);
            topicos.push(CadTopico);
            axios.post('http://localhost:3001/registroFaq', { id, titulo, descricao })
              .then(() => {
                setTitulo('');
                setDescricao('');
                setId('');
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        }
      };
      
      
    const deletar = (id: string) =>{
        axios.delete(`http://localhost:3001/registroFaq/${id}`)
            .then((response) =>{
                updateResp();
            })
            .catch((error) =>{
                console.error(error)
            })
        window.location.reload();
    }
    const updateResp = () => {
        axios.get('http://localhost:3001/registoFaq')
          .then((response) => {
            setTopicos(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    };
    return(

        <div className='parts'>

            <div className='part1'>

<div className="bodyCad">
        <h2>Registro de Respostas ao FAQ</h2>
         <div>
            <label>Chave: </label><br />
            <input className='inputCadUser' type='text' maxLength={10} placeholder="Número do ID" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
            <label>Titulo: </label><br />
            <input className='inputCadUser' type='text' value={titulo} placeholder="Titulo do Problema" onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
            <label>Descrição: </label><br />
            <input className='inputCadUser' type='text' value={descricao} placeholder="Resolução do Problema" onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <button className="buttonCadUser" type='button' onClick={RegistrarTopico}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {tituloError && <div style={{color: 'red'}}>{tituloError}</div>}

            </div>
            </div>

        <div className="part2">

        <div>
            <h2>Lista de Resoluções ao FAQ</h2>
            <table>
                <thead>
                    <tr>
                        <th>Chave</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {topicos.map((topicos)=>(
                            <tr key={topicos.id}>
                                <td>{topicos.id}</td>
                                <td>{topicos.titulo}</td>
                                <td>{topicos.descricao}</td>
                                <td>
                                    <button onClick={() => deletar(topicos.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>


        </div>

        </div>
    )

}

export default EditFaq;
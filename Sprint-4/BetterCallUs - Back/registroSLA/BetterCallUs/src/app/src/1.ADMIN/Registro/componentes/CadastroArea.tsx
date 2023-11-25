import axios from "axios";
import { useState, useEffect } from "react";
import area2 from "../../../types/area";

export const CadastroArea = () =>{
    const [areas, setAreas] = useState<Array<area2>>([])
    const [area, setArea] = useState('');
    const [areaInput, setAreaInput] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tempoDeResposta, setTempoDeResposta] = useState<number>(0);
    const [campoError, setCampoError] = useState('');
    const [areaError, setAreaError] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:3001/registroArea')
            .then((response) =>{
                setArea(response.data)
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [])

    const RegistrarEquipamento = () =>{
        console.log("Clicou em RegistrarEquipamento");
        const padraoArea:RegExp = /^[A-Za-z\s]+$/;
        
/*         if (area !== '' && padraoArea.test(area) && prioridade !== '' && descricao !== '' && tempoDeResposta !== null){ */
            let CadArea= new area2(0, areaInput, prioridade, descricao, tempoDeResposta)
            areas.push(CadArea)
            console.log("Estado após o clique em RegistrarEquipamento:", areas);
            axios.post('http://localhost:3001/registroArea', {
                area1: areaInput,
                prioridade: prioridade || '',  
                descricao: descricao || '',    
                tempoDeResposta: tempoDeResposta !== undefined ? tempoDeResposta : null
              })
              .then((response) => {
                console.log("Resposta do servidor:", response.data);
                setAreas([...areas, response.data]);
              })
            .catch((error) =>{
                console.error(error)
            })
        /* } */
/*         else{
            if(area === '' || !areaInput.match(padraoArea) || areaInput.trim() == '' ){
                setAreaError('Coloque um nome com apenas letras e espaços.');
              }
            if (area === '' || descricao === ''){
                setCampoError('Preencha todos os campos')
            }
        } */
    }
    const deletar = (id: number) =>{
        axios.delete(`http://localhost:3001/registroArea/${id}`)
            .then((response) =>{
                updateContas();
            })
            .catch((error) =>{
                console.error(error)
            })
    }
    const updateContas = () => {
        axios.get('http://localhost:3001/registroArea')
          .then((response) => {
            setAreas(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    };
    return(
        <div className="bodyCad">
        <h2>Registro de Area</h2>
        <div>
            <label>Nome da área: </label><br />
            <input className='inputCadUser' type='text' maxLength={50} value={areaInput} onChange={(e) => setAreaInput(e.target.value)} />
        </div>
        <div>
            <label>Prioridade: </label><br />
            <input className='inputCadUser' type='text' value={prioridade} onChange={(e) => setPrioridade(e.target.value)} />
        </div>
        <div>
            <label>Descrição: </label><br />
            <input className='inputCadUser' type='text' value={descricao} onChange={(e) => setDescricao(e.target.value)} />            
        </div>
        <div>
            <label>Tempo de resposta: </label><br />
            <input className='inputCadUser' type='number' value={tempoDeResposta} onChange={(e) => setTempoDeResposta(Number(e.target.value))} />            
        </div>

        <button className="buttonCadUser" type='button' onClick={RegistrarEquipamento}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {areaError && <div style={{color: 'red'}}>{areaError}</div>}

        <div>
            <h2>Lista de Areas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Area</th>
                        <th>Prioridade</th>
                        <th>Descrição</th>
                        <th>Tempo de resposta</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.map((area)=>(
                            <tr key={area.id}>
                                <td>{area.area1}</td>
                                <td>{area.prioridade}</td>
                                <td>{area.descricao}</td>
                                <td>{area.tempoDeResposta}</td>
                                <td>
                                    <button onClick={() => deletar(area.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
        </div>
    )
}
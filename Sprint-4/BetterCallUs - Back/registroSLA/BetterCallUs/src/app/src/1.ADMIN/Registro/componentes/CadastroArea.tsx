import axios from "axios";
import { useState, useEffect } from "react";
import area2 from "../../../types/area";

export const CadastroArea = () =>{
    const [areas, setAreas] = useState<Array<area2>>([])
    const [area, setArea] = useState('');
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
        const padraoArea:RegExp = /^[A-Za-z\s]+$/;
        
        if (area !== '' && padraoArea.test(area) && prioridade !== '' && descricao !== '' && tempoDeResposta !== null){
            let CadArea= new area2(area, prioridade, descricao, tempoDeResposta)
            areas.push(CadArea)
            axios.post('http://localhost:3001/registroArea', {area, prioridade, descricao, tempoDeResposta})
            .then(()=>{
                setArea('');
                setPrioridade('');
                setDescricao('');
                setTempoDeResposta(0);
            })
            .catch((error) =>{
                console.error(error)
            })
        }
        else{
            if(area === '' || !area.match(padraoArea) || area.trim() == '' ){
                setAreaError('Coloque um nome com apenas letras e espaços.');
              }
            if (area === '' || descricao === ''){
                setCampoError('Preencha todos os campos')
            }
        }
    }
    const deletar = (area:string) =>{
        axios.delete(`http://localhost:3001/registroArea/${area}`)
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
            <input className='inputCadUser' type='text' maxLength={10} value={area} onChange={(e) => setArea(e.target.value)} />
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
                            <tr key={area.area1}>
                                <td>{area.area1}</td>
                                <td>{area.prioridade}</td>
                                <td>{area.descricao}</td>
                                <td>{area.tempoDeResposta}</td>
                                <td>
                                    <button onClick={() => deletar(area.area1)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
        </div>
    )
}
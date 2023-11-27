import axios from "axios";
import { useState, useEffect } from "react";
import equipamento from "../../../types/equipamento";

export const CadastroEquipamento = () =>{
    const [equipamentos, setEquipamentos] = useState<Array<equipamento>>([])
    const [nome, setNome] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [descricao, setDescricao] = useState('');
    const [campoError, setCampoError] = useState('');
    const [nomeError, setNomeError] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:3001/registroEquip')
            .then((response) =>{
                setEquipamentos(response.data)
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [])

    const RegistrarEquipamento = () =>{
        
        if (nome !== '' && descricao !== '' && numeroSerie !== ''){
            let CadEquip = new equipamento(numeroSerie, nome, descricao)
            equipamentos.push(CadEquip)
            axios.post('http://localhost:3001/registroEquip', {numeroSerie ,nome, descricao, })
            .then(()=>{
                setNome('');
                setDescricao('');
                setNumeroSerie('');
            })
            .catch((error) =>{
                console.error(error)
            })
        }
        else{
            if (nome === '' || descricao === ''){
                setCampoError('Preencha todos os campos')
            }
        }
    }
    const deletar = (numeroSerie:string) =>{
        axios.delete(`http://localhost:3001/registroEquip/${numeroSerie}`)
            .then((response) =>{
                updateContas();
            })
            .catch((error) =>{
                console.error(error)
            })
    }
    const updateContas = () => {
        axios.get('http://localhost:3001/registroEquip')
          .then((response) => {
            setEquipamentos(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    };
    return(

        <div className='parts'>

            <div className='part1'>

<div className="bodyCad">
        <h2>Registro de equipamento</h2>
        <div>
            <label>Número de série: </label><br />
            <input className='inputCadUser' type='text' maxLength={10} placeholder="Número de série do equipamento" value={numeroSerie} onChange={(e) => setNumeroSerie(e.target.value)} />
        </div>
        <div>
            <label>Nome: </label><br />
            <input className='inputCadUser' type='text' value={nome} placeholder="Nome do equipamento" onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>Descrição: </label><br />
            <input className='inputCadUser' type='text' value={descricao} placeholder="Breve descrição, exemplo: marca do dispositivo" onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <button className="buttonCadUser" type='button' onClick={RegistrarEquipamento}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}

            </div>
            </div>

        <div className="part2">

        <div>
            <h2>Lista de equipamentos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Número de série</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {equipamentos.map((equipamento)=>(
                            <tr key={equipamento.numeroSerie}>
                                <td>{equipamento.numeroSerie}</td>
                                <td>{equipamento.nome}</td>
                                <td>{equipamento.descricao}</td>
                                <td>
                                    <button onClick={() => deletar(equipamento.numeroSerie)}>Excluir</button>
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
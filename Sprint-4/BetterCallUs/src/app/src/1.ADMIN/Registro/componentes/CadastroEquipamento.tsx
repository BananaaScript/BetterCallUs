import axios from "axios";
import { useState, useEffect } from "react";

export const CadastroEquipamento = () =>{
    const [equipamentos, setEquipamentos] = useState<Array<{nome:string; descricao:string; }>>([])
    const [nome, setNome] = useState('');
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
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        
        if (nome !== '' && padraoNome.test(nome) && descricao !== ''){
            axios.post('http://localhost:3001/registroEquip', {nome, descricao, })
            .then(()=>{
                setNome('');
                setDescricao('');
            })
            .catch((error) =>{
                console.error(error)
            })
        }
        else{
            if(nome === '' || !nome.match(padraoNome) || nome.trim() == '' ){
                setNomeError('Coloque um nome com apenas letras e espaços.');
              }
            if (nome === '' || descricao === ''){
                setCampoError('Preencha todos os campos')
            }
        }
    }
    return(
        <div>
        <h2>Registro de equipamento</h2>
        <div>
            <label>Nome: </label><br />
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>Descrição: </label><br />
            <input type='text' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <button type='button' onClick={RegistrarEquipamento}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}
        </div>
    )
}
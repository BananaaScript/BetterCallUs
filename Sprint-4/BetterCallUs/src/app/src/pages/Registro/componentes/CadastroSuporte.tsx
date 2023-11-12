import {useEffect, useState} from 'react';
import Cliente from '../../../types/Conta';
import axios from 'axios';
import { response } from 'express';

export const CadastroSuporte = () =>{
    const [contas, setContas] = useState<Array<{nome:string; cpf:string; senha:string; privilegio:string }>>([])
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [cpfError, setCPFError] = useState('');
    const [campoError, setCampoError] = useState('');
    const [nomeError, setNomeError] = useState('');
    /* UseEffect do suporte */

    useEffect(() =>{
        axios.get('http://localhost:3001/registroSup')
            .then((response) =>{
                setContas(response.data)
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [])

    const registrarConta = () =>{
        const privilegio = '1'
        setNomeError('');
        setCPFError('');
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        const padraoCpf:RegExp = /^\d+$/

        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && privilegio === '1'){
            axios.post('http://localhost:3001/registroSup', {nome, cpf, senha, privilegio, })
                .then(()=>{
                    setNome('');
                    setCPF('');
                    setSenha('');
                })
                .catch((error) =>{
                    console.error(error)
                })
        }
        else{
            if(nome === '' || !nome.match(padraoNome) || nome.trim() == '' ){
                setNomeError('Coloque um nome com apenas letras e espaços.');
              }
            if (cpf === '' || padraoCpf.test(cpf) === false || cpf.length !== 11){
                setCPFError('CPF invalido, insira um CPF válido.');
            }
            if (cpf === '' || padraoCpf.test(cpf) === false || cpf.length !== 11){
                setCPFError('CPF invalido, insira um CPF válido.');
            }  
        }
    }
    return(
        <div>
        <h2>Registro de conta suporte</h2>
        <div>
            <label>Nome: </label>
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>CPF: </label>
            <input type='text' maxLength={11} value={cpf} onChange={(e) => setCPF(e.target.value)} />
        </div>
        <div>
            <label>Senha: </label>
            <input type='text' value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button type='button' onClick={registrarConta}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}
            {cpfError && <div style={{color: 'red'}}>{cpfError}</div>}
        </div>
    )
}
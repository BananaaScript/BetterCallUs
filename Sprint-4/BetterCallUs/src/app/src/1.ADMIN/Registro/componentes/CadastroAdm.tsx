import {useEffect, useState} from 'react';
import ADM from '../../../types/ADM';
import axios from 'axios';
import { response } from 'express';
import "../styles/registro.css"

export const CadastroAdm = () =>{
    const [contas, setContas] = useState<Array<{nome:string; cpf:string; senha:string; privilegio:string; departamento:string }>>([])
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [cpfError, setCPFError] = useState('');
    const [campoError, setCampoError] = useState('');
    const [nomeError, setNomeError] = useState('');
    /* UseEffect get do Cliente*/
    useEffect(() =>{
        axios.get('http://localhost:3001/registroAdm')
            .then((response) =>{
                setContas(response.data);
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [])

    const registrarConta = () =>{
        const privilegio = '2'
        setNomeError('');
        setCPFError('');
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        const padraoCpf:RegExp = /^\d+$/
        
        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && departamento !== '' && senha !== '' && privilegio === '2'){
        axios.post('http://localhost:3001/registroAdm', {nome, cpf, senha, privilegio, departamento})
            .then(() =>{
                setNome('');
                setCPF('');
                setSenha('');
                setDepartamento('');
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
  
              
            if (nome === '' || senha === '' || cpf === '' || departamento === ''){
                  setCampoError('Todos os campos devem ser preenchidos.')
            }
        }
    }
    return(
        <div className=''>
        <h2>Registro de conta administrador</h2>
        <div>
            <label>Nome: </label><br />
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>CPF: </label><br />
            <input type='text' maxLength={11} value={cpf} onChange={(e) => setCPF(e.target.value)} />
        </div>
        <div>
            <label>Senha: </label><br />
            <input type='text' value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div>
            <label>Departamento: </label><br />
            <input type='text' value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
        </div>
        <br />
        <button type='button' onClick={registrarConta}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}
            {cpfError && <div style={{color: 'red'}}>{cpfError}</div>}

        </div>
    )
}
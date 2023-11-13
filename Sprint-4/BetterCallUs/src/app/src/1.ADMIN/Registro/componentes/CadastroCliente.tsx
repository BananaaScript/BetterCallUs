import {useEffect, useState} from 'react';
import Cliente from '../../../types/Cliente';
import axios from 'axios';
import { response } from 'express';
import "../styles/registro.css"

export const CadastroCliente = () =>{
    const [contas, setContas] = useState<Array<{nome:string; cpf:string; senha:string; privilegio:string; email:string; telefone:string; nomeSocial:string }>>([])
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [email,setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [cpfError, setCPFError] = useState('');
    const [campoError, setCampoError] = useState('');
    const [nomeError, setNomeError] = useState('');
    /* UseEffect get do Cliente*/
    useEffect(() =>{
        axios.get('http://localhost:3001/registroCliente')
            .then((response) =>{
                setContas(response.data);
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [])
    

    const registrarConta = () =>{
        const privilegio = '0'
        setNomeError('');
        setCPFError('');
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        const padraoCpf:RegExp = /^\d+$/

        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && email !== '' && telefone !== '' && nomeSocial !== '' &&privilegio === '0'){
        axios.post('http://localhost:3001/registroCliente', {nome, cpf, senha, privilegio, email, telefone, nomeSocial, })
            .then(()=>{
                setNome('');
                setNomeSocial('');
                setTelefone('');
                setEmail('');
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

            
            if (nome === '' || senha === '' || cpf === '' || email === '' || telefone === '' || nomeSocial === ''){
                setCampoError('Todos os campos devem ser preenchidos.')
            }
        }
        } 
    
    return(
        <div>
        <h2>Registro de conta cliente</h2>
        <div>
            <label>Nome: </label>
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>Nome Social: </label>
            <input type='text' value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
        </div>
        <div>
            <label>Email: </label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Telefone: </label>
            <input type='text' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
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
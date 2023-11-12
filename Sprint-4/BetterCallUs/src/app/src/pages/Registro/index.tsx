import {useEffect, useState} from 'react';
import Conta from '../../types/Conta';
import axios from 'axios';
import { response } from 'express';

export const RegistroConta = () =>{
    const [contas, setContas] = useState<Array<{nome:string; cpf:string; senha:string; privilegio:string }>>([])
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [privilegio, setPrivilegio] = useState('');
    const [cpfError, setCPFError] = useState('');
    const [privilegioError, setPrivilegioError] = useState('');
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
        });
    }, [])
    /* UseEffect get do Suporte */
    useEffect(() =>{
      axios.get('http://localhost:3001/registroSup')
        .then((response) =>{
          setContas(response.data);
        })
        .catch((error) =>{
          console.error(error)
        })
    }, [])
    /* UseEffect get do Adm */
    useEffect(() =>{
      axios.get('http://localhost:3001/registroAdm')
        .then((response) =>{
          setContas(response.data);
        })
        .catch((error) =>{
          console.log(error)
        });
    }, [])

    const registrarConta = () =>{
        setNomeError('');
        setCPFError('');
        setPrivilegioError('');
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        const padraoCpf:RegExp = /^\d+$/

        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && privilegio === '0'){
        axios.post('http://localhost:3001/registroCliente', {nome, cpf, senha, privilegio, })
          .then(() =>{
            setNome('');
            setCPF('');
            setSenha('');
            setPrivilegio('');
          })
          .catch((error) => {
            console.error(error)
          })

        /* console.log('Conta registrada', novaConta)  */ 
        }
        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && privilegio === '1'){
          axios.post('http://localhost:3001/registroSup', {nome, cpf, senha, privilegio, })
            .then(() =>{
              setNome('');
              setCPF('');
              setSenha('');
              setPrivilegio('');
            })
            .catch((error) =>{
              console.error(error)
            })
        }
        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && privilegio === '2'){
          axios.post('http://localhost:3001/registroAdm', {nome, cpf, senha, privilegio, })
            .then(() =>{
              setNome('');
              setCPF('');
              setSenha('');
              setPrivilegio('');
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
            if (privilegio === ''){
                setPrivilegioError('Selecione um privilégio!');
            }
            if (nome === '' || senha === '' || cpf === '' || privilegio === ''){
                setCampoError('Todos os campos devem ser preenchidos.')
            }
        }
    }
    
    return(
        <div>
        <h2>Registro de conta</h2>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" maxLength={11} value={cpf} onChange={(e) => setCPF(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div>
          <label>Privilégio:</label>
          <select value={privilegio} onChange={(e) => setPrivilegio(e.target.value)}>
            <option value="">Selecione</option> {/* EM QUESTÃO SOBRE O PRIVILÉGIO, 0 É CLIENTE, 1 É SUPORTE E 2 É ADMINISTRADOR */}
            <option value="0">Cliente</option>
            <option value="1">Suporte</option> 
            <option value="2">Administrador</option>
          </select>
        </div>
        <button type="button" onClick={registrarConta}>
          Registrar
        </button>
           {campoError && <div style={{color: 'red'}}>{campoError}</div>}
           {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}
           {cpfError && <div style={{color: 'red'}}>{cpfError}</div>}
           {privilegioError && <div style={{color: 'red'}}>{privilegioError}</div>}
        </div>
    );
};

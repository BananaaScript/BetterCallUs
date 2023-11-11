import {useState} from 'react';
import Conta from '../../types/Conta';

export const RegistroConta = () =>{
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [cpfError, setCPFError] = useState('');
    const [privilegio, setPrivilegio] = useState('');
    const [privilegioError, setPrivilegioError] = useState('');
    const [campoError, setCampoError] = useState('');
    const [nomeError, setNomeError] = useState('');

    const registrarConta = () =>{
        setNomeError('');
        setCPFError('');
        setPrivilegioError('');
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        const padraoCpf:RegExp = /^\d+$/

        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && privilegio !== ''){
        const novaConta = new Conta(nome, cpf, senha, privilegio);
        setNome('');
        setCPF('');
        setSenha('');
        setPrivilegio('');
        console.log('Conta registrada', novaConta)  
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

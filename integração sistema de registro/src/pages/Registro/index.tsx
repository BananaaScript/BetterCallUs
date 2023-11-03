import {useState} from 'react';
import Conta from '../../types/Conta';

export const RegistroConta = () =>{
    const [contas, setContas] = useState<Conta[]>([]);
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
        const padraoNome = /^[A-Za-z\s]+$/;

        if (nome !== '' && nome.match(padraoNome) && nome.trim() !== '' && cpf !== '' && /^\d+$/.test(cpf) && cpf.length == 11 && senha !== '' && privilegio !== ''){
        const novaConta = new Conta(nome, cpf, senha, privilegio);
        setContas((prevContas) => [...prevContas, novaConta]);
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

            if (cpf === '' || !/^\d+$/.test(cpf) || cpf.length !== 11){
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
            <option value="">Selecione</option>
            <option value="cliente">Cliente</option>
            <option value="suporte">Suporte</option>
          </select>
        </div>
        <button type="button" onClick={registrarConta}>
          Registrar
        </button>
  
        <h2>Contas Registradas</h2>
        <ul>
          {contas.map((conta, index) => (
            <li key={index}>
              Nome: {conta.nome}, CPF: {conta.cpf}, Privilégio: {conta.privilegio}
            </li>
          ))}
        </ul>
           {campoError && <div style={{color: 'red'}}>{campoError}</div>}
           {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}
           {cpfError && <div style={{color: 'red'}}>{cpfError}</div>}
           {privilegioError && <div style={{color: 'red'}}>{privilegioError}</div>}
        </div>
    );
};

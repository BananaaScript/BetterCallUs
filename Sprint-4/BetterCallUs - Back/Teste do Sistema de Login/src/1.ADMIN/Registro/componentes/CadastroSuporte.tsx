import {useEffect, useState} from 'react';
import Cliente from '../../../types/Conta';
import axios from 'axios';
import { response } from 'express';
import "../styles/registro.css"
import Conta from '../../../types/Conta';

export const CadastroSuporte = () =>{
    const [contas, setContas] = useState<Array<Conta>>([])
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
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
        const padraoEmail:RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && padraoEmail.test(email) && privilegio === '1'){
            let ContaSup = new Conta(nome, cpf, senha, privilegio, email)
            contas.push(ContaSup)
            axios.post('http://localhost:3001/registroSup', {nome, cpf, senha, privilegio, email, })
                .then(()=>{
                    setNome('');
                    setCPF('');
                    setSenha('');
                    setEmail('');
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
            if (email === '' || padraoEmail.test(email) == false){
                setEmailError('forma do email incorreta, tente novamente.');
            }
            if (nome === '' || cpf === '' || senha === ''){
                setCampoError('Preencha todos os campos')
            }
        }
    }
    const deletar = (cpf:string) =>{
        axios.delete(`http://localhost:3001/registroSup/${cpf}`)
            .then((response) =>{
                updateContas();
            })
            .catch((error) =>{
                console.error(error)
            })
    }
    const updateContas = () => {
        axios.get('http://localhost:3001/registroSup')
          .then((response) => {
            setContas(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return(
        <div className='bodyCad'>
        <h2>Registro de conta suporte</h2>
        <div>
            <label>Nome: </label><br />
            <input className='inputCadUser' type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>Email: </label><br />
            <input className='inputCadUser' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>CPF: </label><br />
            <input className='inputCadUser' type='text' maxLength={11} value={cpf} onChange={(e) => setCPF(e.target.value)} />
        </div>
        <div>
            <label>Senha: </label><br />
            <input className='inputCadUser' type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button className='buttonCadUser' type='button' onClick={registrarConta}>Registrar</button>
            {campoError && <div style={{color: 'red'}}>{campoError}</div>}
            {nomeError && <div style={{color: 'red'}}>{nomeError}</div>}
            {cpfError && <div style={{color: 'red'}}>{cpfError}</div>}
            {emailError && <div style={{color: 'red'}}>{emailError}</div>}

        <div>
            <h2>Lista de suporte</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>cpf</th>
                        <th>email</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((suporte)=>(
                            <tr key={suporte.cpf}>
                                <td>{suporte.nome}</td>
                                <td>{suporte.cpf}</td>
                                <td>{suporte.email}</td>
                                <td>
                                    <button onClick={() => deletar(suporte.cpf)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
        </div>
    )
}
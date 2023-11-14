import {useEffect, useState} from 'react';
import Cliente from '../../../types/Cliente';
import axios from 'axios';
import { response } from 'express';
import "../styles/registro.css"

export const CadastroCliente = () =>{
    const [contas, setContas] = useState<Array<Cliente>>([])
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [email,setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
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
        let ContaCliente = new Cliente(nome, cpf, senha, privilegio, email, telefone, nomeSocial)
        contas.push(ContaCliente)
        setNomeError('');
        setCPFError('');
        const padraoNome:RegExp = /^[A-Za-z\s]+$/;
        const padraoCpf:RegExp = /^\d+$/
        const padraoEmail:RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (nome !== '' && padraoNome.test(nome) && nome.trim() !== '' && cpf !== '' && padraoCpf.test(cpf) && cpf.length == 11 && senha !== '' && email !== '' && padraoEmail.test(email) &&telefone !== '' && nomeSocial !== '' &&privilegio === '0'){
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

            if (email === '' || padraoEmail.test(email) == false){
                setEmailError('forma do email incorreta, tente novamente.');
            }
        }
        }
        
        const deletar = (cpf:string) =>{
            axios.delete(`http://localhost:3001/registroCliente/${cpf}`)
                .then((response) =>{
                    updateContas();
                })
                .catch((error) =>{
                    console.error(error)
                })
        }

        const updateContas = () => {
            axios.get('http://localhost:3001/registroCliente')
              .then((response) => {
                setContas(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          };
    
    return(
        <div className='bodyCad'>
        <h2>Registro de conta cliente</h2>
        <div>
            <label>Nome: </label><br />
            <input className='inputCadUser' type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
            <label>Nome Social: </label><br />
            <input className='inputCadUser' type='text' value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
        </div>
        <div>
            <label>Email: </label><br />
            <input className='inputCadUser' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Telefone: </label><br />
            <input className='inputCadUser' type='text' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
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
            <h2>Lista de clientes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>cpf</th>
                        <th>email</th>
                        <th>telefone</th>
                        <th>nomeSocial</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((cliente)=>(
                            <tr key={cliente.cpf}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.nomeSocial}</td>
                                <td>
                                    <button onClick={() => deletar(cliente.cpf)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
        </div>
        
    )
}
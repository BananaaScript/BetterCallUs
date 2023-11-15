import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css'


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [privi, setPrivi] = useState("");
  const emailRegex:RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  }

  const handlePrivi = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrivi(e.target.value)
  } 

  const handleLogin = async () => {
    if(email === '' || senha === '' || privi === ''){
      alert('Todos os campos devem ser preenchidos, tente novamente')
    }
    if(emailRegex.test(email) === false){
      alert('Email incorreto, tente novamente')
    }
    if (email !== ''&& emailRegex.test(email) && senha !== '' &&  privi !== '') {
      const logado = await auth.login(email, senha, privi);
      if (logado && privi === 'suporte') {
        navigate('/Chamadassup')
      } 
      if(logado && privi === 'cliente'){
        navigate('/');
      }
    }
  }

  return (
    <div>
      
      <div className='bodyLogin'>
        
        
        <div className="boxLogin">
        <a href="/"><button >Voltar</button></a>
        
          <p id="tituloLogin">Log-in</p>
          <p id='esquerda'>E-MAIL:</p>
          <input className='inputLogin' type='text' value={email} onChange={handleEmail} placeholder="Digite seu email" />
          <p id='esquerda'>SENHA:</p>
          <input className='inputLogin' type='password' value={senha} onChange={handleSenha} placeholder="Digite sua senha" />
          <p id='esquerda'>Privilégio</p>
          <select value={privi} onChange={handlePrivi} placeholder='Selecione seu privilégio'>
            <option value = "">Selecione</option>
            <option value= "cliente">Cliente</option>
            <option value= "suporte">Suporte</option>
          </select>
          <button className='buttonLogin' onClick={handleLogin}>LOGIN</button>
          
    
        </div>
        
      </div>

    </div>
    
  );
}

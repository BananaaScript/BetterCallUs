import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  }

  const handleLogin = async () => {
    if (email && senha) {
      const logado = await auth.login(email, senha);
      if (logado) {
        navigate('/')
      } 
      else {
        alert('Putz, que pena né? Verifique suas credenciais');
      }
    }
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <input type='text' value={email} onChange={handleEmail} placeholder="Digite seu email" />
      <input type='password' value={senha} onChange={handleSenha} placeholder="Digite sua senha" />
      <button onClick={handleLogin}>Logar</button>
    </div>
  );
}

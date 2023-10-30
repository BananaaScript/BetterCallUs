// src/App.js
import React, { useState } from 'react';
import Login from './Login';

const users = [
  {username: 'cliente', password: 'senhacliente', role: 'client'},
  {username: 'suporte', password: 'senhasuporte', role: 'support'}
]

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    const authenticatedUser = users.find((u) => u.username === username && u.password === password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
    } else {
      alert('Login falhou. Verifique suas credenciais')
    }
  };

  return (
    <div>
      {user ? (
        <div>
          Bem-vindo, {user.username} ({user.role})
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;


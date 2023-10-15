import React, { useContext } from 'react';
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';  
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Ticket } from './pages/Ticket'


function App(){
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async() =>{
    await auth.logout()
    navigate('/')
    
  }

  return (
    <div className="App">
    <header className='cabeca'>
        <div className='cabecao'>
          <button><Link to='/'>Home</Link></button>
          <Link to='/'><img id='logo' src='logo.png'/></Link>
          <button><Link to='/ticket'>Ticket</Link></button>
          {auth.usuario && <button onClick={handleLogout}>Sair</button>}
        </div>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ticket" element={<RequireAuth><Ticket /></RequireAuth>} />
    </Routes>
  </div>
  )
}



export default App;

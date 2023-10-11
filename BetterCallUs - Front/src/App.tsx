import React, { useContext } from 'react';
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';  
import { Private } from './pages/Private'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';



function App(){
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async() =>{
    await auth.logout()
    navigate('/')
    
  }

  return (
    <div className="App">
    <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/private'>Private</Link>
          {auth.usuario && <button onClick={handleLogout}>Sair</button>}
        </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/private' element={<RequireAuth><Private /></RequireAuth>} />
    </Routes>
  </div>
  )
}



export default App;

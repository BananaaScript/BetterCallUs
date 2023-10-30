import React, { useContext } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';  
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Ticket } from './pages/Ticket'
import { Chamadassup } from './2.SUPORTE/pages/Chamadassup';


function App(){
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async() =>{
    await auth.logout()
    navigate('/')
    
  }

  return (
    <div>
      <div className='headAPP'>

          <div className='buttonAPP'>
          <Link to='/ticket'><button>Enviar ticket</button></Link>
            
          </div>

          <div className='logoApp'>
            <Link to='/'><img id='logo' alt='logo' src='logo.png'/></Link>
          </div>

          <div className='menuAPP'>
            {auth.usuario && <button onClick={handleLogout}>Sair</button>}
          </div>

          <div className='menuAPP'>
          <Link to='/Chamadassup'><button>suporte</button></Link>
          </div>

          <div className='menuAPP'>
          <Link to='/ticket'><button>admin</button></Link>
          </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<RequireAuth><Ticket /></RequireAuth>} />
        <Route path="/Chamadassup" element={<RequireAuth><Chamadassup /></RequireAuth>} />
      </Routes>
    </div>
    
  )
}



export default App;


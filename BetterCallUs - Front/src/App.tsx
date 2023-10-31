
import React, { useContext } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';  
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Ticket } from './pages/Ticket';
import { Chamadassup } from './2.SUPORTE/pages/Chamadassup';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.logout();
    navigate('/');
  }

  const isChamadassupPage = window.location.pathname === '/Chamadassup';

  return (
    <div className='bodyAPP'>
      {isChamadassupPage ? null : (
        <div className='headAPP'>
          <div className='buttonAPP'>
            <Link to='/ticket'><button>Enviar ticket</button></Link>
          </div>
          <div className='logoApp'>
            <Link to='/'><img id='logo' alt='logo' src='logo.png' /></Link>
          </div>
          <div className='menuAPP'>
            <button>
              MENU
            </button>
          </div>
        </div>
      )}
      <Link to='/Chamadassup'><button>suporte</button></Link>
          <Link to='/ticket'><button>admin</button></Link>
          {auth.usuario && <button onClick={handleLogout}>Sair</button>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<RequireAuth><Ticket /></RequireAuth>} />
        <Route path="/Chamadassup" element={<RequireAuth><Chamadassup /></RequireAuth>} />
      </Routes>


      {isChamadassupPage ? null : (
        <footer>
          <div className='cima'>

            <div className='parte1'>
            <p>e-mail: bettercallus.code@gmail.com</p>   
            </div>

            <div className='parte2'>
              <p>smt</p>
              </div>

              <div className='parte3'>
              <p>WhatsApp/ Telefone: 4002-8922</p>
              </div>

          </div>

          <hr></hr>
          <p>©CODEÍNA 2023 - Todos os Direitos Reservados</p>
        </footer>

        
      )}
    </div>
  )
}

export default App;

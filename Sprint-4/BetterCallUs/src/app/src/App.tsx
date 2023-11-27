
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';  
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import  TicketFunction  from './pages/Ticket';
import { Chamadassup } from './2.SUPORTE/pages/Chamadassup';
import { Adm } from './1.ADMIN/Home/'
import Login from './pages/login';
import { Edituser } from './pages/Menu/editaruser';
import { Histuser } from './pages/Menu/historico';
import logoInsta from './styles/img/logoInsta.png';
import logoTiktok from './styles/img/logoTiktok.png';
import logoTwitter from './styles/img/logoTwitter.png';
import logoGithub from './styles/img/logoGithub.png';
import Cadastro from './1.ADMIN/Registro';
import { ListaSuporte } from './1.ADMIN/Lista';
import { SLAsistema } from './1.ADMIN/sla/sla';



function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = async () => {
    await auth.logout();
    navigate('/');
  }

  const [menuAberto, setMenuAberto] = useState(false);
  const abrirMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    abrirMenu();
    handleLogout();
  }

  interface Botão {
    caminho: string;
    label: string;
    privilegio?: number;
  }
  
  const botoes: Botão[] = [
    { caminho: '/ticket', label: 'Enviar ticket', privilegio: 0 },
    { caminho: '/login', label: 'Login', privilegio: undefined },
  ];

  const renderizarBotoes = () => {
    return botoes.map((botao) => {
      const renderizar =
        (botao.privilegio === undefined && auth.usuario?.privilegio === undefined) ||
        (botao.privilegio !== undefined && auth.usuario?.privilegio === botao.privilegio);


      return renderizar ? (
        <div key={botao.caminho} className='buttonAPP'>
          <Link to={botao.caminho}>
            <button>{botao.label}</button>
          </Link>
        </div>
      ) : null;
    });
  };

  return (
    <div className='bodyAPP'>
        <div>
          <div className='headAPP'>
          <div className='um'>
          {renderizarBotoes()}
          <div className='logoApp'>
            <Link to='/'><img id='logo' alt='logo' src='logo.png' /></Link>
            
          </div>
          <div className='menuAPP'>      
             
            <button onClick={abrirMenu}>
              <hr />
              <hr />
              <hr />
            </button>
            {menuAberto && (
              <div className='menuHome'>
                <div className='opcMenuHome'><Link to='/Chamadassup'>{auth.usuario && auth.usuario.privilegio === 1 &&<button onClick={abrirMenu}>Acessar Interface de Suporte</button>}</Link></div>
                <div className='opcMenuHome'><Link to='/Administrador'>{auth.usuario && auth.usuario.privilegio === 2 &&<button onClick={abrirMenu}>Acessar Interface de Administrador</button>}</Link></div>
                <div className='opcMenuHome'><Link to='/histuser'>{auth.usuario?.privilegio === 0 &&<button onClick={abrirMenu}>Historico de Chamadas</button>}</Link></div>
                <div className='opcMenuHome'>{auth.usuario && <button onClick={fecharMenu}>Sair</button>}</div>
              </div>
               )}
          </div>
          </div>
          
        </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<RequireAuth><Login /></RequireAuth>} />
          <Route path="/ticket" element={<TicketFunction />} />
          <Route path='/histuser' element={<Histuser />} />
          <Route path="/Chamadassup" element={<Chamadassup />} />
          <Route path="/Administrador" element={<Adm />} />
          <Route path="/Cadastro" element={<Cadastro/>} />
          <Route path="/lista" element={<ListaSuporte/>} />
          <Route path="/sla" element={<SLAsistema/>} />
        </Routes>

      
        <footer>
          <div className='cima'>

            <div className='parte1'>
            <p>e-mail: bettercallus.code@gmail.com</p>   
            </div>

            <div className='parte2'>
              <a href="https://github.com/CODE1na/BetterCallUs" target='blank'> <img src={logoGithub} alt="Github" title="Logo Github" /></a>
              <a href="https://www.instagram.com/bettercallus.code/?next=%2F" target='blank'> <img src={logoInsta} alt="Instagram" title="Logo Instagram" /></a>
              <a href="https://www.tiktok.com/@bettercallus.code" target='blank'> <img src={logoTiktok} alt="Tiktok" /></a>
              <a href="https://twitter.com/better_code_us" target='blank'> <img src={logoTwitter} alt="Twitter" /></a>
              </div>

              <div className='parte3'>
              <p>WhatsApp/ Telefone: (**) ****-****</p>
              </div>

          </div>

          <hr></hr>
          <p>©CODEÍNA 2023 - Todos os Direitos Reservados</p>
        </footer>

    </div>
  )
}

export default App;

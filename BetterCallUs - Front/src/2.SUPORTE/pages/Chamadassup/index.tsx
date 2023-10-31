import React from 'react';
import Login from '../../../pages/login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'

export const Chamadassup = () => {
  // Chame Login() aqui se necessário

  return (
    <div className='bodyTicket'>
      <div className="container">
        <div className="sidenav">
          <p className='linha'>
            <p>Chamada01</p>
            <p>(Não respondido)</p>
          </p>
          <hr></hr>
          <p className='linha'>
            <p>Chamada02</p>
            <p>(Não respondido)</p>
          </p>
          <hr></hr>
          <p className='linha'>
            <p>Chamada03</p>
            <p>(Não respondido)</p>
          </p>
          <hr></hr>
          <p className='linha'>
            <p>Chamada04</p>
            <p>(Não respondido)</p>
          </p>
          <hr></hr>
          <p className='linha'>
            <p>Chamada05</p>
            <p>(Não respondido)</p>
          </p>
          <hr></hr>
          <p className='linha'>
            <p>Chamada06</p>
            <p>(Não respondido)</p>
          </p>
          <hr></hr>
        </div>

        <div className="main">
          {/* Header específico para a página Chamadassup */}
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
            <Link to='/Chamadassup'><button>suporte</button></Link>
            <Link to='/ticket'><button>admin</button></Link>
            {/* Inclua outros elementos do cabeçalho conforme necessário */}
          </div>

          <h1>aaaaaaaa</h1>
          <h1>aaaaaaaa</h1>
          <h1>aaaaaaaa</h1>
          <h1>aaaaaaaa</h1>
          <h1>aaaaaaaa</h1>
          <h1>aaaaaaaa</h1>
          <h1>aaaaaaaa</h1>
        </div>
      </div>
    </div>
  )
}

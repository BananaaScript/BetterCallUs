import './styles/Ticket.css'
import  Login from '../../../pages/login'

export const Chamadassup = () => {
    Login()

    return(
        <div className='bodyTicket'>
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
                <h2>Sidenav Example</h2>
                <p>This sidenav is always shown.</p>
            </div>

        </div>
    )

}
import './styles/Ticket.css'
import  Login from '../../../pages/login'

export const Chamadassup = () => {
    Login()

    return(
        <div className='bodyTicket'>
            <div className='problemaTicket'>
                <h1>Enviar uma solicitação</h1>
                <textarea placeholder='Descreva aqui seu problema' rows={15} cols={90}></textarea>
            </div>
            <br />

            <div className='recursosTicket'>
                <div className='dadosTicket'>
                        <select id='opcoes'>
                            <option value="" disabled selected>Selecione o tipo de problema</option>
                            <option value="Prob.Hardware">Falha de Hardware</option>
                            <option value="Prob.Software">Falha de Software</option>
                            <option value="Prob.Conexao">Problemas de Conexão</option>
                            <option value="Prob.Cabeamento">Problema no Cabeamento</option>
                            <option value="Outro">Outro</option>
                        </select> 

                        <form action="processa_imagem_perfil.php" method="post" encType="multipart/form-data">
                            <input type="file" name="image"></input>  
                        </form>
                </div>
            </div>
            <button className='buttonTicket'>Enviar</button>
        </div>
    )

}

import  Login from '../login';
import { Link } from 'react-router-dom';
import './styles/Ticket.css'
import { link } from 'fs';


export const Ticket = () => {

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
                            <option value="Prob.Rede">Problemas de rede</option>
                            <option value="Prob.Software">Problemas de software </option>
                            <option value="Prob.Seguranca">Problemas de segurança</option>
                            <option value="Prob.Virus">Vírus e malware</option>
                            <option value="Prob.Atualizacao">Problemas de atualização de software</option>
                            <option value="Prob.Hardware">Falhas de hardware</option>
                            <option value="Prob.Resfriamento">Problemas de resfriamento</option>
                            <option value="Prob.Audio">Problemas com equipamentos de áudio e vídeo</option>
                            <option value="Prob.Impressão">Problemas de impressão</option>
                            <option value="Outro">------ Outro ------</option>
                        </select> 

                        <form action="processa_imagem_perfil.php" method="post" encType="multipart/form-data">
                            <input type="file" name="image"></input>  
                        </form>
                </div>
            </div>

                <a href="/"><button className='buttonTicket'>Enviar</button></a>
                
                
            
        </div>
    )

}
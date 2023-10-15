import  Login from '../login'


export const Ticket = () => {
    Login()

    return(
        <div className='bodyTicket'>
            <div className='problemaTicket'>
                <p>Enviar uma solicitação</p>
                <textarea rows={15} cols={90} >Descreva aqui seu problema</textarea>
            </div>
            <br />

            <div className='recursosTicket'>
                <div className='dadosTicket'>
                    <p>- Adicione um arquivo referente ao problema: (Opicional)</p>
                    <form action="processa_imagem_perfil.php" method="post" encType="multipart/form-data">
                        <input type="file" name="image"></input>  
                    </form>
                    <p>- Selecione o Tipo do seu Problema: (Obrigatorio)</p>
                    <select>
                        <option value="Prob.Hardware">Falha de Hardware</option>
                        <option value="Prob.Software">Falha de Software</option>
                        <option value="Prob.Conexao">Problemas de Conexão</option>
                        <option value="Prob.Cabeamento">Problema no Cabeamento</option>
                        <option value="Outro">Outro</option>
                    </select> 

                </div>
            </div>
            <button className='buttonTicket'>Enviar</button>
        </div>
    )

}
import  Login from '../login'


export const Ticket = () => {
    Login()

    return(
        <div className='bodyTicket'>
            <div className='problemaTicket'>
                <p>Enviar uma solicitação</p>
                <textarea rows={15} cols={90}>Descreva o probelma encontadro de forma detalhada e clara</textarea>
            </div>
            <br />

            <div className='recursosTicket'>
                <div className='dadosTicket'>
                    <select name="problemaTicket">
                       <option value="volvo">Selecione o tipo de problema</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                         <option value="audi">Audi</option>
                    </select> 
                    <form action="processa_imagem_perfil.php" method="post" encType="multipart/form-data">
                        <input type="file" name="image"></input>  
                    </form>
                </div>
                <input type="submit" value="Enviar"></input>
            </div>

            
        </div>
    )

}
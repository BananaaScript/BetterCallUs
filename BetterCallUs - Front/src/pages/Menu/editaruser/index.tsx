
import Login from "../../login"

import './style/edituser.css'

export const Edituser = () => {
    const voltar = () => {
        window.history.back();
    };
    

        return(
        <>
        <button className="voltarEditUser" onClick={voltar}>Voltar</button>
        <div className="bodyEditUser">

            
            <h3>Dados do Usuario:</h3>
            <input className='inputEditUser' type='text'  placeholder="Email Atual: *********@*****" />
            <input className='inputEditUser' type='text'  placeholder="Senha Atual: *********" />
            <h4>Opicional:</h4>
            <input className='inputEditUser' type='text'  placeholder="Nome Civil Atual: ********* **** ********" />
            <input className='inputEditUser' type='text'  placeholder="CPF Atual: *********" />
            <input className='inputEditUser' type='text'  placeholder="RG Atual: ********* **** ********" />
            
            <button className="buttonEditUser" >Salvar</button>
            
            
            
        </div>
            
        </>
        )
    }

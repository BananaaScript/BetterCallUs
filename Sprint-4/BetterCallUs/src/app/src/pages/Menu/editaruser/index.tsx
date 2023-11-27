
import Login from "../../login"

import './style/edituser.css'


export default function Voltar () {
    window.history.back();
};

export const Edituser = () => {


        return(
        <>
        <button className="voltarEditUser" onClick={Voltar}>Voltar</button>
        <div className="bodyEditUser">

            
            <h3>Dados do Usuario:</h3>
            <input className='inputEditUser' type='text'  placeholder="Email Atual: *********@*****" />
            <input className='inputEditUser' type='text'  placeholder="Senha Atual: *********" />
            <h4>Opcional:</h4>
            <input className='inputEditUser' type='text'  placeholder="Nome Civil Atual: ********* **** ********" />
            <input className='inputEditUser' type='text'  placeholder="CPF Atual: *********" />
            <input className='inputEditUser' type='text'  placeholder="RG Atual: ********* **** ********" />
            
            <a href="/" className="aEditUser"><button className="buttonEditUser" >Salvar</button></a>
            
            
            
            
        </div>
            
        </>
        )
    }

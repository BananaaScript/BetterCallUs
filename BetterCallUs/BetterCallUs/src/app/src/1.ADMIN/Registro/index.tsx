import React, {useState} from "react";
/* Imports dos cadastros */
import { CadastroCliente } from "./componentes/CadastroCliente";
import { CadastroSuporte } from "./componentes/CadastroSuporte";
import { CadastroAdm } from "./componentes/CadastroAdm";
import "./styles/registro.css"
import { CadastroEquipamento } from "./componentes/CadastroEquipamento";

const Cadastro = () =>{
    const [tipoCadastro, setTipoCadastro] = useState(null);

    const EscolherCadastro = (tipo:any) =>{
        setTipoCadastro(tipo);
    }
    return(
        
        <div className="bodyCadUser">
            <h2>Escolha o tipo de cadastro: </h2>
            <div className="tipoCad">
                 
                <button className="buttonCadUser" onClick={() => EscolherCadastro('cliente') }>Cliente</button>
                <button className="buttonCadUser" onClick={()=> EscolherCadastro('suporte')}>Suporte</button>
                <button className="buttonCadUser" onClick={() => EscolherCadastro('adm')}>Administrador</button>
                <button className="buttonCadUser" onClick={() => EscolherCadastro('equipamento')} >Equipamentos</button>
            </div>
            
            <div className="opcCadUser">
                {tipoCadastro === 'cliente' && <CadastroCliente/>}
                {tipoCadastro === 'suporte' && <CadastroSuporte/>}
                {tipoCadastro === 'adm' && <CadastroAdm/>}
                {tipoCadastro === 'equipamento' && <CadastroEquipamento />}

        
            </div>
        </div>
    )
}

export default Cadastro;



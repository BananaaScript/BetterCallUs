import React, {useState} from "react";
/* Imports dos cadastros */
import { CadastroCliente } from "./componentes/CadastroCliente";
import { CadastroSuporte } from "./componentes/CadastroSuporte";
import { CadastroAdm } from "./componentes/CadastroAdm";

const Cadastro = () =>{
    const [tipoCadastro, setTipoCadastro] = useState(null);

    const EscolherCadastro = (tipo:any) =>{
        setTipoCadastro(tipo);
    }
    return(
        <div>
            <h2>Escolha o tipo de cadastro: </h2>
            <button onClick={() => EscolherCadastro('cliente')}>Cliente</button>
            <button onClick={()=> EscolherCadastro('suporte')}>Suporte</button>
            <button onClick={() => EscolherCadastro('adm')}>Administrador</button>

            {tipoCadastro === 'cliente' && <CadastroCliente/>}
            {tipoCadastro === 'suporte' && <CadastroSuporte/>}
            {tipoCadastro === 'adm' && <CadastroAdm/>}
        </div>
    )
}

export default Cadastro;



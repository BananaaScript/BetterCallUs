import React, {useEffect, useState} from "react";
import axios from "axios";
import { Suporte } from "../../types/Suporte";
import "../Lista/styles/list.css"

export const ListaSuporte: React.FC = () =>{
    const [contas, setContas] = useState<Array<Suporte>>([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/registroSup')
            .then((response) =>{
                setContas(response.data)
            })
            .catch((error) =>{
                console.error(error);
            })
    }, []);

    return(
        <div className="tabela">
            <h2>Lista de suportes cadastrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Chamados Ativos</th>
                        <th>Chamados Respondidos</th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((suporte) =>(
                        <tr key={suporte.cpf}>
                            <td>{suporte.nome}</td>
                            <td>{suporte.cpf}</td>
                            <td>{suporte.email}</td>
                            <td>{suporte.chamados}</td>
                            <td>{suporte.chamadosRespondidos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
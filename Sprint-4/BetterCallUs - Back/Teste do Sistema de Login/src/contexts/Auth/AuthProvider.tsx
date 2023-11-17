import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import Conta from "../../types/Conta"
import { UseAPI } from "../../hooks/useAPI";

export const AuthProvider = ({children}: {children: JSX.Element}) =>{
    const [usuario, setUser] = useState<Conta | null>(null);
    const [tabela, setTable] = useState<string | null>(localStorage.getItem('authTable') || null);
    const api = UseAPI()

    useEffect(() => {

        const validateToken = async () => {
            
            const storageData = localStorage.getItem('authToken');
                if (storageData) {
                    const data = await api.validateToken(storageData);
                    if (data.usuario) {
                        setUser(data.usuario);
                    }
                }
        };
        validateToken();
    }, []);
    

    const setToken = (token: string) =>{
        localStorage.setItem('authToken', token)
    }
    const login = async (email:string, senha:string) =>{
        const data = await api.login(email, senha);
        console.log(data)
        console.log(data.token)
        if(data.usuario && data.token){
            setUser(data.usuario)
            setTable(data.tabela);
            setToken(data.token)
            return true
        }
        return false
    }

    
    
    const logout = async() =>{
        await api.logout()
        setUser(null)
        setTable("")
        setToken("")
    }

    return(
        <AuthContext.Provider value={{usuario, tabela, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
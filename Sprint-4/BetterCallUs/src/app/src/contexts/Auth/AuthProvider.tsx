import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import Usuario from "../../types/Usuario"
import { UseAPI } from "../../hooks/useAPI";

export const AuthProvider = ({children}: {children: JSX.Element}) =>{
    const [usuario, setUser] = useState<Usuario | null>(null);
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
    

    const login = async (email:string, senha:string) =>{
        const data = await api.login(email, senha);
        if(data.usuario && data.token){
            setUser(data.usuario)
            setToken(data.token)
            return true
        }
        return false
    }

    const setToken = (token: string) =>{
        localStorage.setItem('authToken', token)
    }
    
    const logout = async() =>{
        await api.logout()
        setUser(null)
        setToken("")
    }

    return(
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
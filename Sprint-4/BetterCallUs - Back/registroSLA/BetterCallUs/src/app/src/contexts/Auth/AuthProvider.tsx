import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import Conta from "../../types/Conta"
import { UseAPI } from "../../hooks/useAPI";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [usuario, setUser] = useState<Conta | null>(null);
  const api = UseAPI();

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

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  

  const login = async (email: string, senha: string) => {
    try {
      const data = await api.login(email, senha);
      if (data.usuario && data.token) {
        setUser(data.usuario);
        setToken(data.token);
        console.log('User after login:', data.usuario);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro durante o login:', error);
      return false;
    }
  };
  

  const logout = async () => {
    await api.logout();
    setUser(null);
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
import React, { createContext } from 'react';
import Conta from '../../types/Conta';

export type AuthContextType = {
    usuario: Conta | null;
    tabela: string | null;
    login: (email:string, senha:string, privilegio?: string) => Promise<boolean>
    logout: () => void
}


export const AuthContext = createContext<AuthContextType>(null!);

import React, { createContext } from 'react';
import Conta from '../../types/Conta';

export type AuthContextType = {
    usuario: Conta | null;
    login: (email:string, senha:string, privilegio?: string) => Promise<boolean>
    logout: () => void
}


export const AuthContext = createContext<AuthContextType>(null!);

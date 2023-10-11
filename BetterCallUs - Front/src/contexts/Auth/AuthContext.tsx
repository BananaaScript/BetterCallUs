import React, { createContext } from 'react';
import Usuario from '../../types/Usuario';

export type AuthContextType = {
    usuario: Usuario | null;
    login: (email:string, senha:string) => Promise<boolean>
    logout: () => void
}


export const AuthContext = createContext<AuthContextType>(null!);

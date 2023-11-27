import React, { ReactNode, useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { Navigate } from 'react-router-dom';

type ElementoSuporteProps = {
  children: ReactNode;
};

function ElementoSuporte({ children }: ElementoSuporteProps): JSX.Element | null {
    const auth = useContext(AuthContext);
    const privilegio = auth.usuario?.privilegio;

    if (privilegio === 1) {
        return <>{children}</>;
    } else {
        return <Navigate to={'/'}/>
    }
}

export default ElementoSuporte;
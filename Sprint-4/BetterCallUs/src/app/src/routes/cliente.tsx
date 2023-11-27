import React, { ReactNode, useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { Navigate } from 'react-router-dom';

type ElementoClienteProps = {
  children: ReactNode;
};

function ElementoCliente({ children }: ElementoClienteProps): JSX.Element | null {
  const auth = useContext(AuthContext);
  const privilegio = auth.usuario?.privilegio;

    if (privilegio === 0) {
      return <>{children}</>;
    } else {
      return <Navigate to={'/'}/>
    }
}

export default ElementoCliente;
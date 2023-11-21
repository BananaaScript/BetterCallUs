import React, { useContext, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  privilegioNecessario?: number;
  children: ReactNode;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children, privilegioNecessario = 0 }) => {
  const auth = useContext(AuthContext);

  if (!auth.usuario || auth.usuario.privilegio === undefined) {
    return <Login />
  }

  if (auth.usuario.privilegio < privilegioNecessario) {
    alert('Acesso Negado hahahahahaha!!!💀💀💀💀💀');
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

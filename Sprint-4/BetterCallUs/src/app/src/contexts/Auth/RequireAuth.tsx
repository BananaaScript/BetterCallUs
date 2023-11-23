import React, { useContext, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login";
import { Chamadassup } from "../../2.SUPORTE/pages/Chamadassup";
import { Adm } from "../../1.ADMIN/Home";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.usuario) {
    return <Login />;
  }

  const privilegio = auth.usuario.privilegio;

  if (privilegio === 1) {
    return <Chamadassup />
  } else if (privilegio === 2) {
    return <Adm/>
  }

  return <>{children}</>;
};

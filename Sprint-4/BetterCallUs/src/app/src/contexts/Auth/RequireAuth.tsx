import React, { useContext, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login";
import { useNavigate } from "react-router-dom";
import { Chamadassup } from "../../2.SUPORTE/pages/Chamadassup";
import { Adm } from "../../1.ADMIN/Home";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth.usuario) {
    navigate("/login");
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

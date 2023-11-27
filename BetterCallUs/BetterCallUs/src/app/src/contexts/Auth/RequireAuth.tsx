import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login";
import { Adm } from "../../1.ADMIN/Home";
import Home from "../../pages/Home";
import { Chamadassup } from "../../2.SUPORTE/pages/Chamadassup";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.usuario) {
    return <Login />;
  } else if (auth.usuario.privilegio === 1) {
    return <Chamadassup />;
  } else if (auth.usuario.privilegio === 2) {
    return <Adm />;
  } else if (auth.usuario.privilegio === 0) {
    return <Home />;
  }
  

  return children;
};

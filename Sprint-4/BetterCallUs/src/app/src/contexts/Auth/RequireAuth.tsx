import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login";
import { Navigate, useLocation } from "react-router-dom";


export const RequireAuth = ({ children }: { children: JSX.Element  }) => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const [Recarreagar, setRecarregar] = useState(false);

  useEffect(() => {
    if (auth.usuario && auth.usuario.privilegio === 1 && location.pathname === "/Chamadassup") {
      setRecarregar(true);
    } else if (auth.usuario && auth.usuario.privilegio === 2 && location.pathname === "/Administrador") {
      setRecarregar(true);
    }
  }, [auth.usuario, location.pathname]);

  useEffect(() => {
    if (Recarreagar) {
      window.location.reload();
      setRecarregar(false);
    }
  }, [Recarreagar]);

  if (!auth.usuario) {
    return <Login />;
  } else if (auth.usuario.privilegio === 1) {
    return <Navigate to="/Chamadassup" />;  
  } else if (auth.usuario.privilegio === 2) {
    return <Navigate to="/Administrador" />;
  }


  return children;
};

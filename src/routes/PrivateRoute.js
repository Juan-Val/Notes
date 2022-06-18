import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { obtenerUsuario } from "src/actions/auth";

export const PrivateRoute = ({ children }) => {
  const { autenticado, cargando } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerUsuario());
  }, [dispatch]);

  return <>{!autenticado && !cargando ? <Navigate to="/" /> : children}</>;
};

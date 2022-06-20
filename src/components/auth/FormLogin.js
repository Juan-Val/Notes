import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { establecerError, limpiarError, loginUsuario } from "src/actions/auth";
import { ErrorForm } from "../error/ErrorForm";

// State de formulario de login
export const FormLogin = () => {
  // Importar dispatch
  const dispatch = useDispatch();

  // Extraer el estado del usuario
  const autenticado = useSelector((state) => state.auth.autenticado);
  const error = useSelector((state) => state.auth.error);
  const { estado, msg } = error;
  let navigate = useNavigate();
  const [formlogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  // Extraccion de valores de formulario
  const { email, password } = formlogin;

  const handleChange = (e) => {
    setFormLogin({
      ...formlogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if (email.trim() === "" && password.trim() === "") {
      dispatch(establecerError("Todos los campos son obligatorios"));
      return;
    } else if (email.trim() === "") {
      dispatch(establecerError("El email es obligatorio"));
      return;
    } else if (password.trim() === "") {
      dispatch(establecerError("El password es obligatorio"));
      return;
    }

    // Pasar al state principal
    dispatch(loginUsuario({ email, password }));
    // Reiniciar el form
    setFormLogin({
      usuario: "",
      password: "",
    });
    dispatch(limpiarError());
  };

  useEffect(() => {
    if (autenticado) {
      navigate("/home");
    }
  }, [autenticado, navigate]);

  return (
    <form
      action=""
      className="flex flex-col w-full text-black"
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        type="text"
        placeholder="Usuario"
        className="m-2 p-3 rounded-md  border-2 border-gray-200 bg-none"
        name="email"
        value={email || ""}
        onChange={handleChange}
      />
      <input
        autoComplete="off"
        type="password"
        placeholder="Contraseña"
        className="m-2 p-3 rounded-md border-2 bg-none border-gray-200"
        name="password"
        value={password || ""}
        onChange={handleChange}
      />
      {estado ? <ErrorForm error={msg} /> : null}
      <button
        to="home"
        className="m-2 p-3 text-center  bg-[#F7685C] hover:bg-[#c43f33] transition-all ease-in duration-300 rounded-md text-white text-lg drop-shadow-md"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "src/actions/auth";
import { ErrorForm } from "../error/ErrorForm";

// State de formulario de login
export const FormLogin = () => {
  // Importar dispatch
  const dispatch = useDispatch();

  // Extraer el estado del usuario
  const autenticado = useSelector((state) => state.auth.autenticado);
  let navigate = useNavigate();

  const [formlogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  // State de error
  const [error, setError] = useState({
    stateError: false,
    mensaje: "",
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
      setError({
        stateError: true,
        mensaje: "Por favor llena ambos campos",
      });
      return;
    } else if (email.trim() === "") {
      setError({
        stateError: true,
        mensaje: "El nombre de email es necesario",
      });
      return;
    } else if (password.trim() === "") {
      setError({
        stateError: true,
        mensaje: "La contraseña es necessaria",
      });
      return;
    }

    // Pasar al state principal
    dispatch(loginUsuario({ email, password }));
    // Reiniciar el form
    setFormLogin({
      usuario: "",
      password: "",
    });
    setError({
      stateError: false,
      mensaje: "",
    });
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
      {error.stateError ? <ErrorForm error={error} /> : null}
      <button
        to="home"
        className="m-2 p-3 text-center  bg-[#F7685C] hover:bg-[#c43f33] transition-all ease-in duration-300 rounded-md text-white text-lg drop-shadow-md"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

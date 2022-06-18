import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrar } from "src/actions/auth";
import { ErrorForm } from "../error/ErrorForm";

export const FormSignin = () => {
  // Importar dispatch
  const dispatch = useDispatch();

  // Extraer el estado del usuario
  const autenticado = useSelector((state) => state.auth.autenticado);
  let navigate = useNavigate();
  // State de formulario de login
  const [formsignin, setFormSignin] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State de error
  const [error, setError] = useState({
    stateError: false,
    mensaje: "",
  });

  // Extraccion de valores de formulario
  const { nombre, email, password, confirmPassword } = formsignin;

  // Leer los datos del formulario
  const handleChange = (e) => {
    setFormSignin({
      ...formsignin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar el formulario
    if (
      nombre.trim() === "" &&
      email.trim() === "" &&
      password.trim() === "" &&
      confirmPassword.trim() === ""
    ) {
      setError({
        stateError: true,
        mensaje: "Todos los campos son necesarios",
      });
      return;
    } else if (nombre.trim() === "") {
      setError({
        stateError: true,
        mensaje: "El nombre de usuario es necesario",
      });
      return;
    } else if (email.trim() === "") {
      setError({
        stateError: true,
        mensaje: "EL email es necessaria",
      });
      return;
    } else if (password.trim() === "") {
      setError({
        stateError: true,
        mensaje: "La contraseña es necessaria",
      });
      return;
    } else if (confirmPassword.trim() === "") {
      setError({
        stateError: true,
        mensaje: "La contraseña es necessaria",
      });
      return;
    } else if (password !== confirmPassword) {
      setError({
        stateError: true,
        mensaje: "Las contraseñas no coinciden",
      });
      return;
    }

    // Pasar al state principal
    dispatch(registrar({ nombre, email, password }));

    // Reiniciar el form
    setFormSignin({
      nombre: "",
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
        type="text"
        placeholder="Nombre de usuario"
        className="m-2 p-3 rounded-md  border-2 border-gray-200 bg-none"
        name="nombre"
        value={nombre || ""}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        className="m-2 p-3 rounded-md  border-2 border-gray-200 bg-none"
        name="email"
        value={email || ""}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="m-2 p-3 rounded-md border-2 bg-none border-gray-200"
        name="password"
        value={password || ""}
        onChange={handleChange}
      />
      <input
        autoComplete="off"
        type="password"
        placeholder="Confirmar contraseña"
        className="m-2 p-3 rounded-md border-2 bg-none border-gray-200"
        name="confirmPassword"
        value={confirmPassword || ""}
        onChange={handleChange}
      />
      {error.stateError ? <ErrorForm error={error} /> : null}
      <button
        type="submit"
        className="m-2 p-3 text-center  bg-[#F7685C] rounded-md text-white text-lg drop-shadow-md  hover:bg-[#c43f33] transition-all ease-in duration-300"
      >
        Registrarse
      </button>
    </form>
  );
};

import clienteAxios from "src/config/Axios";
import { TokenAuth } from "src/config/Token";
const { types } = require("src/types/types");

export const registrar = (datos) => {
  return async (dispatch) => {
    try {
      const resultado = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: types.registro,
        payload: resultado.data.token,
      });
      obtenerUsuario();
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUsuario = (datos) => {
  return async (dispatch) => {
    try {
      const resultado = await clienteAxios.post("/api/auth", datos);
      dispatch({
        type: types.login,
        payload: resultado.data.token,
      });
    } catch (error) {
      dispatch({
        type: types.error,
        payload: error.response.data.msg,
      });
    }
  };
};

export const obtenerUsuario = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      TokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get("/api/auth");
      dispatch({
        type: types.obtenerUsuario,
        payload: respuesta.data.usuariovalidado,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cerrarSesion = () => {
  return (dispatch) => {
    dispatch({
      type: types.cerrarSesion,
    });
  };
};

export const establecerError = (msg) => {
  return (dispatch) => {
    dispatch({
      type: types.error,
      payload: msg,
    });
  };
};

export const limpiarError = () => {
  return (dispatch) => {
    dispatch({
      type: types.limpiarError,
    });
  };
};

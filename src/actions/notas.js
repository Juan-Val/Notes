import clienteAxios from "src/config/Axios";
import { TokenAuth } from "src/config/Token";

const { types } = require("src/types/types");

export const leerNotas = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      TokenAuth(token);
    }
    try {
      const resultado = await clienteAxios.get("/api/tareas");
      dispatch({
        type: types.notasLeer,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const agregarNota = (nota) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      TokenAuth(token);
    }
    try {
      const resultado = await clienteAxios.post("/api/tareas", nota);
      dispatch({
        type: types.notasAgregar,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const seleccionarNota = (nota) => {
  return {
    type: types.notaSeleccionada,
    payload: nota,
  };
};

export const actualizatNota = (nota) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      TokenAuth(token);
    }
    try {
      const resultado = await clienteAxios.put(`/api/tareas/${nota._id}`, nota);
      dispatch({
        type: types.notaActualizar,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const limpiarNota = () => {
  return {
    type: types.notaLimpiar,
  };
};

export const eliminarNota = (nota) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      TokenAuth(token);
    }
    try {
      await clienteAxios.delete(`/api/tareas/${nota._id}`);
      dispatch({
        type: types.notasEliminar,
        payload: nota,
      });
    } catch (error) {
      console.log(error);
    }
    // type: types.notasEliminar,
    // payload: nota,
  };
};

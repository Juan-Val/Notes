import { types } from "src/types/types";

const initialState = {
  notas: [],
  notaSeleccionada: null,
};

export const notasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notasLeer:
      return {
        ...state,
        notas: action.payload,
      };
    case types.notasAgregar:
      return {
        ...state,
        notas: [action.payload, ...state.notas],
      };
    case types.notaSeleccionada:
      return {
        ...state,
        notaSeleccionada: action.payload,
      };
    case types.notasEliminar:
      return {
        ...state,
        notas: state.notas.filter((nota) => nota._id !== action.payload._id),
      };
    case types.notaActualizar:
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota._id === action.payload._id ? action.payload : nota
        ),
      };
    case types.notaLimpiar:
      return {
        ...state,
        notaSeleccionada: null,
      };
    default:
      return state;
  }
};

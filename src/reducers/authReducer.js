const { types } = require("src/types/types");

const initialState = {
  autenticado: false,
  usuario: [],
  cargando: true,
  error: {
    estado: false,
    msg: null,
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.registro:
    case types.login:
      localStorage.setItem("token", action.payload);
      setTimeout(() => {
        return {
          ...state,
          autenticado: true,
          cargando: false,
        };
      }, 100);
    case types.obtenerUsuario:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };
    case types.cerrarSesion:
      localStorage.removeItem("token");
      return {
        ...state,
        autenticado: false,
        usuario: null,
        cargando: false,
      };
    case types.error:
      return {
        ...state,
        error: {
          estado: true,
          msg: action.payload,
        },
      };
    case types.limpiarError:
      return {
        ...state,
        error: {
          estado: false,
          msg: null,
        },
      };
    default:
      return state;
  }
};

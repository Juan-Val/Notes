const { types } = require("src/types/types");

const initialState = {
  autenticado: false,
  usuario: [],
  cargando: true,
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
    default:
      return state;
  }
};

import { types } from "src/types/types";

const initialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.modalOpen:
      return {
        ...state,
        isOpen: true,
      };
    case types.modalClose:
      return {
        ...state,
        isOpen: false,
      };
    case types.modalEdit:
      return {
        ...state,
        isOpen: true,
        notaSeleccionada: action.payload,
      };
    default:
      return state;
  }
};

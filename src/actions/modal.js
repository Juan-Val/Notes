import { types } from "src/types/types";

export const modal = () => {
  return {
    type: types.modalOpen,
  };
};

export const modalClose = () => {
  return {
    type: types.modalClose,
  };
};

export const modalEdit = (nota) => {
  return {
    type: types.modalEdit,
    payload: nota,
  };
};

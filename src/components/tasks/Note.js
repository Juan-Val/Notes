import React from "react";
import { useDispatch } from "react-redux";
import { modal } from "src/actions/modal";
import { eliminarNota, seleccionarNota } from "src/actions/notas";
import { motion } from "framer-motion";

export const Note = ({ nota }) => {
  // Dispatch de acciones
  const dispatch = useDispatch();

  // Extraer fecha de manera mas amigable
  const fecha = new Date(nota.creado);
  const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
  // Onclick delete note
  const handleDelete = () => {
    dispatch(eliminarNota(nota));
  };

  // Onclick edit note
  const handleEdit = () => {
    dispatch(seleccionarNota(nota));
    dispatch(modal());
  };

  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className={`rounded-lg p-2 overflow-hidden m-1 w-72 min-h-[100px] max-h-fit relative ${nota.color} dark:text-black`}
    >
      <h4 className="mb-2 text-xl">{nota.titulo}</h4>
      <p className="mb-7 text-base">{nota.nota}</p>
      <div className="absolute bottom-0">
        <footer className="flex justify-between  items-center w-[270px] max-w-[270px]">
          <span className="text-gray-700">{fechaFormateada}</span>
          <div>
            <button onClick={handleEdit}>
              <i className="bx bx-edit-alt text-2xl ml-2 text-gray-700"></i>
            </button>
            <button onClick={handleDelete}>
              <i className="bx bx-trash text-2xl ml-2 text-gray-700"></i>
            </button>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

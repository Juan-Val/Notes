import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actualizatNota, agregarNota, limpiarNota } from "src/actions/notas";
import { ErrorForm } from "./error/ErrorForm";

export const ModalScreen = ({ modal, handleClose }) => {
  // Dispatch de acciones
  const dispatch = useDispatch();

  // State de errores
  const [error, setError] = useState({
    stateError: false,
    mensaje: "",
  });

  const colores = [
    "bg-slate-300",
    "bg-red-300",
    "bg-orange-300",
    "bg-lime-300",
    "bg-green-400",
    "bg-teal-300",
  ];

  // Revisar si hay una tarea seleccionada
  const notaSeleccionada = useSelector((state) => state.notas.notaSeleccionada);
  // Si hay una tarea seleccionada, se carga los datos en el form
  useEffect(() => {
    if (notaSeleccionada !== null) {
      setForm(notaSeleccionada);
    } else {
      reset();
    }
  }, [notaSeleccionada]);

  const [form, setForm] = useState({
    titulo: "",
    nota: "",
    color: "",
  });

  // Extraer el titulo y la descripcion
  const { titulo, nota } = form;

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Funcion reset de form
  const reset = () => {
    setForm({
      titulo: "",
      nota: "",
      color: "",
    });
  };

  // Extraccion theme global
  const theme = localStorage.getItem("theme");

  // Custom styles de la ventana modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme === "dark" ? "#27272a" : "#ffffff",
      color: theme === "dark" ? "#ffffff" : "#000000",
      borderRadius: "10px",
      boder: "none",
      boxShadow: "none",
    },
  };

  // Submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si hay un titulo
    if (titulo.trim() === "") {
      setError({ stateError: true, mensaje: "El titulo es necesario" });
      return;
    }

    // Validar si hay una descripcion
    if (nota.trim() === "") {
      setError({ stateError: true, mensaje: "La nota es necesaria" });
      return;
    }

    // Validar si es una tarea nueva o actualizar
    if (notaSeleccionada === null) {
      form.color = colores[Math.floor(Math.random() * colores.length)];
      dispatch(agregarNota({ titulo, nota, color: form.color }));
    } else {
      dispatch(actualizatNota(form));
    }
    dispatch(limpiarNota());
    reset();
    handleClose();
    setError({ stateError: false, mensaje: "" });
  };

  // Cerrar modal

  const cerrarModal = () => {
    dispatch(limpiarNota());
    handleClose();
    reset();
  };

  return (
    <Modal
      isOpen={modal.isOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h2 className="text-2xl">Agrega una nueva Nota.</h2>
      <div className="flex flex-col p-3">
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="m-2">
            <label htmlFor="title" className="text-sm w-full">
              Ingesa titulo de la nota.
            </label>
            <input
              type="text"
              name="titulo"
              value={titulo}
              autoComplete=" off"
              placeholder="Ingresa el titulo de la nota"
              className="w-full p-2 border border-gray-300 rounded-md outline-none text-black normal-case"
              onChange={handleInputChange}
            />
          </div>
          <div className="m-2">
            <label htmlFor="title" className="text-sm w-full">
              Realizar una descripcion.
            </label>
            <textarea
              name="nota"
              value={nota}
              className="w-full h-auto p-2 border border-gray-300 rounded-md outline-none resize-none text-black"
              rows="5"
              onChange={handleInputChange}
              placeholder="Ingresa una descripcion de la nota..."
            ></textarea>
          </div>
          {error.stateError ? <ErrorForm error={error} /> : null}
          <div className="m-2 flex justify-around ">
            <button
              type="submit"
              className="rounded-md bg-[#F7685C] p-2 text-white w-2/5"
            >
              {notaSeleccionada === null ? "Guardar" : "Editar"}
            </button>

            <button
              onClick={cerrarModal}
              className="rounded-md bg-[#F7685C] p-2 text-white w-2/5"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

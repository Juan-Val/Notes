import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "src/actions/modal";
import { leerNotas } from "src/actions/notas";
import { Bienvenida } from "./layout/Bienvenida";
import { ModalScreen } from "./ModalScreen";
import { ContainerNota } from "./tasks/ContainerNota";

export const Main = () => {
  // Importar dispatch
  const dispatch = useDispatch();
  // Extraer el estado del usuario
  const usuario = useSelector((state) => state.auth.usuario);
  const cargando = useSelector((state) => state.auth.cargando);

  // Extraer información de usuario

  // Selecctor del state de la modalScreen
  const stateModal = useSelector((state) => state);
  // Extraccion del valor del state de la modalScreen
  const { modal } = stateModal;

  // Selecctor del state de la notas
  const notasState = useSelector((state) => state.notas);

  const handleClose = () => {
    dispatch(modalClose());
  };

  // Leer notas
  useEffect(() => {
    dispatch(leerNotas());
  }, [dispatch]);

  return (
    <>
      {cargando ? null : (
        <div className=" bg-white w-full pl-[18%] md:pl-[10%] p-5 dark:bg-zinc-800 dark:text-white">
          <Bienvenida usuario={usuario.nombre} />
          {notasState.length === 0 ? (
            <h1 className="text-2xl  md:text-4xl text-center">
              Agregue una nota para comenzar!!!
            </h1>
          ) : (
            <ContainerNota notas={notasState.notas} />
          )}
          <ModalScreen modal={modal} handleClose={handleClose} />
        </div>
      )}
    </>
  );
};

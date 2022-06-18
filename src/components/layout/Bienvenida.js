import React from "react";

export const Bienvenida = ({ usuario }) => {
  // const nombre = usuario;

  return (
    <div className="m-4 ">
      <h1 className="text-3xl">
        Hola, <span className="font-bold">{usuario} !!</span>
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Todas tus notas estan aquí, en un solo lugar!
      </p>
    </div>
  );
};

import React from "react";

export const EstadosNotas = () => {
  return (
    <div className=" flex flex-row m-2 p-3 bg-neutral-100 w-1/2 mx-auto justify-center rounded-full dark:text-black">
      <button className="py-2 px-4 focus:bg-neutral-300 rounded-full mr-2">
        Todas
      </button>
      <button className="py-2 px-4 focus:bg-neutral-300 rounded-full mr-2">
        Completatos
      </button>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { cerrarSesion } from "src/actions/auth";
import { modal } from "src/actions/modal";
import { ChangeTheme } from "./ChangeTheme";

export const SideBar = () => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(modal());
  };

  const handelCerrarSesion = () => {
    dispatch(cerrarSesion());
  };
  return (
    <header className="h-full w-[15%] flex p-3 border-r-2 border-gray-300 fixed justify-center sm:w-[10%] md:w-[10%] lg:w-[5%] dark:bg-zinc-800 dark:text-white ">
      <nav className="flex">
        <div className=" flex flex-col justify-between">
          <ChangeTheme />
          <button onClick={handleOpen}>
            <i className="bx bx-plus text-4xl"></i>
          </button>
          <button onClick={handelCerrarSesion}>
            <i className="bx bx-exit text-4xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

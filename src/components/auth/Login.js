import React from "react";
import { Link } from "react-router-dom";
import { FormLogin } from "./FormLogin";

import imgNotes from "../../assets/imgs/notes.png";
import { ChangeTheme } from "../layout/ChangeTheme";

export const Login = () => {
  return (
    <div className="p-5 grid content-center h-screen md:grid-cols-2 md:items-center shadow-lg dark:bg-zinc-800 dark:text-white">
      <div className="hidden md:grid items-center">
        <img src={imgNotes} alt="notes" className="lg:h-3/4" />
      </div>
      <div className="md:w-3/4 mx-auto">
        <div className="flex text-4xl items-center justify-center m-5">
          <i className="bx bxs-edit text-[#F7685C]"></i>
          <h1>
            <span className="font-semibold">NOTE &</span> TASK
          </h1>
        </div>
        <h1 className="text-lg text-center ">Comienza a tomar notas.</h1>
        <FormLogin />

        <Link
          to="/signin"
          className="w-32  p-3  rounded-md text-gray-500 text-lg "
        >
          Registrarse
        </Link>
      </div>
      <div className="absolute top-0 right-0 p-6">
        <ChangeTheme />
      </div>
    </div>
  );
};

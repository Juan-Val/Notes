import React from "react";
import { Link } from "react-router-dom";
import { FormSignin } from "./FormSignin";
import imgLogin from "../../assets/imgs/Login.png";
import { ChangeTheme } from "../layout/ChangeTheme";

export const SignIn = () => {
  return (
    <div className="p-5 grid content-center h-screen md:grid-cols-2 md:items-center dark:bg-zinc-800 dark:text-white">
      <div className="hidden md:grid items-center">
        <img src={imgLogin} alt="notes" className="lg:h-3/4" />
      </div>
      <div className="md:w-3/4 mx-auto">
        <div className="flex text-4xl items-center justify-center m-5">
          <i className="bx bxs-edit text-[#F7685C]"></i>
          <h1>
            <span className="font-semibold">NOTE &</span> TASK
          </h1>
        </div>
        <h1 className="text-lg text-center ">
          Estas cercar de poder tomar notas.
        </h1>
        <FormSignin />
        <Link to="/" className="w-42  p-3  rounded-md text-gray-500 text-lg ">
          Regresar a inicio
        </Link>
      </div>
      <div className="absolute top-0 right-0 p-6">
        <ChangeTheme />
      </div>
    </div>
  );
};

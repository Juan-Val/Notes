import React from "react";
import { SideBar } from "./layout/SideBar";
import { Main } from "./Main";

export const Home = () => {
  return (
    <main className="conteiner h-[100vh] flex">
      <SideBar />
      <Main />
    </main>
  );
};

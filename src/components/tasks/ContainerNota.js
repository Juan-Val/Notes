import React from "react";
import { Note } from "./Note";

export const ContainerNota = ({ notas }) => {
  return (
    <div className="flex flex-auto flex-wrap">
      {notas.map((nota) => (
        <Note nota={nota} key={nota._id} />
      ))}
    </div>
  );
};

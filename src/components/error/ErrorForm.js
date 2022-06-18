import React from "react";

export const ErrorForm = ({ error }) => {
  return (
    <div className="m-2 p-3 rounded-md bg-red-700 text-center  text-white">
      <p>{error.mensaje}</p>
    </div>
  );
};

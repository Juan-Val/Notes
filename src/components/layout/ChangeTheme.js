import React from "react";
import { useEffect } from "react";

export const ChangeTheme = () => {
  // Cambiar theme
  const handlesChangeTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handlesChangeTheme();
  }, []);

  return (
    <button onClick={handlesChangeTheme}>
      {localStorage.getItem("theme") === "dark" ? (
        <i className="bx bx-sun text-4xl"></i>
      ) : (
        <i className="bx bx-moon text-4xl"></i>
      )}
    </button>
  );
};

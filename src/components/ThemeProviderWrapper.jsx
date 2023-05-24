/* eslint-disable react/prop-types */
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import ThemeContext from "../context/ThemeContext";

const themes = {
  default: {
    colors: {
      secondColor: "#ffffff",
      bgColor: "#F2F2F2",
      fontColor: "#111517",
      switchColor: "#202C36",
    },
  },
  dark: {
    colors: {
      secondColor: "#2B3844",
      bgColor: "#202C36",
      fontColor: "#ffffff",
      switchColor: "#F2F2F2",
    },
  },
};

const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "default" ? "dark" : "default"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProviderWrapper;

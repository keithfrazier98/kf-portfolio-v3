import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext({});

export default function ThemeProvider({ children }) {
  //theme = rainbow | dark
  const [theme, setTheme] = useState("dark");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

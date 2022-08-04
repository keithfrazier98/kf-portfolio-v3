import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext({});

export default function ThemeProvider({ children }) {
  //theme = rainbow | regular
  const [theme, setTheme] = useState("regular");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

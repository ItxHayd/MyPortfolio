import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
   const[isDark,setDark] = useState(true);
    

  return (
    <ThemeContext.Provider value={{isDark,setDark}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
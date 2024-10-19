import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightThrmr: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
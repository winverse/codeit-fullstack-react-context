import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {
    throw Error("ThemeProvider 내부에서 사용해야 합니다.");
  },
});

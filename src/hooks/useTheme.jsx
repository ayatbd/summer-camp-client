import { useContext } from "react";
import { ThemeContext } from "../ThemeProviders";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default useTheme;

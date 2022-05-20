import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);
// const UserContext = createContext()

export default ThemeContext;